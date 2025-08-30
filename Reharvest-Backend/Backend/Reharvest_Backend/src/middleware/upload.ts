import multer from 'multer';

const upload = multer();

export const uploadImage = upload.single('image'); 