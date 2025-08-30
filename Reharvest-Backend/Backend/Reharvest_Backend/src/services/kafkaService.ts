import { producer, consumer } from '../config/kafka';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class KafkaService {
  // Send item data to AI model for processing
  static async sendItemForProcessing(itemData: {
    itemId: number;
    itemType: string;
    yearsUsed: number;
    condition: string;
    description: string;
    imageUrl: string;
  }) {
    try {
      await producer.connect();
      await producer.send({
        topic: 'item-processing',
        messages: [
          {
            key: itemData.itemId.toString(),
            value: JSON.stringify(itemData),
          },
        ],
      });
      console.log(`Sent item ${itemData.itemId} for AI processing`);
    } catch (error) {
      console.error('Error sending item to Kafka:', error);
      throw error;
    }
  }

  // Start consumer to receive AI scores
  static async startScoreConsumer() {
    try {
      await consumer.connect();
      await consumer.subscribe({ topic: 'ai-score-result', fromBeginning: true });

      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          try {
            const scoreData = JSON.parse(message.value?.toString() || '{}');
            const { itemId, conditionScore } = scoreData;

            // Update database with AI score
            await prisma.item.update({
              where: { id: itemId },
              data: { conditionScore },
            });

            console.log(`Updated item ${itemId} with score: ${conditionScore}`);
          } catch (error) {
            console.error('Error processing AI score:', error);
          }
        },
      });

      console.log('AI score consumer started');
    } catch (error) {
      console.error('Error starting Kafka consumer:', error);
      throw error;
    }
  }
} 