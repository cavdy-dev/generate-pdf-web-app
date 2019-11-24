const cloudinary = require('../config/cloudinaryConfig');

/* istanbul ignore next */
module.exports = async (file, fileName) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      public_id: fileName,
      folder: 'pdfUploads'
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
