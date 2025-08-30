import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import streamifier from 'streamifier';
import type { Request } from 'express';
import { verifyJWT } from './middleware/auth';
import cloudinary from './config/cloudinary';
import { uploadImage } from './middleware/upload';
import { KafkaService } from './services/kafkaService';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//get green points end point
app.get('/api/getGreenPoints', verifyJWT, async (req, res) => {
  try {
    // Get user id and email from req.user
    const userId = parseInt((req as any).user.id);
    if (!userId) {
      return res.status(400).json({ error: 'User ID not found in token' });
    }

    // Get user's green points
    const user = await prisma.greenPoints.findFirst({
      where: { userId: userId },
    });
    const userGreenPoints = user?.points ?? null;

    // Get company green points (company userId is hardcoded as 1 int the db)
    const company = await prisma.greenPoints.findFirst({
      where: { userId: 1 },
    });
    const companyGreenPoints = company?.points ?? null;


    res.json({
      userGreenPoints,
      companyGreenPoints
    });


  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});




//Add item end point
app.post('/api/addNonEdible', verifyJWT, uploadImage, async (req: Request, res) => {
  try {
    const { itemType, yearsUsed, condition, description } = req.body;
    const userId = parseInt((req as any).user?.id); // userId is a string in the token, so we need to parse it to an integer
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID not found in token' });
    }
    const file = (req as any).file as Express.Multer.File;
    if (!file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    // Upload image to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'items' },
      async (error, result) => {
        if (error || !result) {
          return res.status(500).json({ error: 'Image upload failed' });
        }
        
        // Store item in DB
        const item = await prisma.item.create({
          data: {
            itemType,
            yearsUsed: parseInt(yearsUsed, 10),
            condition,
            description,
            imageUrl: result.secure_url,
            userId,
          },
        });

        // Send to Kafka for AI processing
        try {
          await KafkaService.sendItemForProcessing({
            itemId: item.id,
            itemType: item.itemType,
            yearsUsed: item.yearsUsed,
            condition: item.condition,
            description: item.description,
            imageUrl: item.imageUrl,
          });
        } catch (kafkaError) {
          console.error('Kafka error:', kafkaError);
          // Don't fail the request if Kafka fails
        }

        res.json(item);
      }
    );
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start Kafka consumer when server starts
KafkaService.startScoreConsumer().catch(console.error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 