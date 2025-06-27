const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_API_KEY , 
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedFormat: ["png", "jpg", "jpeg"],
    transformation: [
      { width: 800, height: 600, crop: 'fill', quality: 'auto:good' }
    ],
  },
});

// Helper function to generate optimized image URLs
const getOptimizedImageUrl = (originalUrl, type = 'card') => {
    // Remove any existing transformations
    const baseUrl = originalUrl.split('/upload/')[0] + '/upload/';
    const imagePath = originalUrl.split('/upload/')[1];
    
    const transformations = {
        card: 'w_300,h_200,c_fill,q_auto:good',
        show: 'w_800,h_500,c_fill,q_auto:good',
        thumbnail: 'w_100,h_100,c_fill,q_auto:good'
    };
    
    return `${baseUrl}${transformations[type]}/${imagePath}`;
};

module.exports={
    cloudinary,storage,getOptimizedImageUrl
}