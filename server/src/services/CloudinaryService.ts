import { v2 as cloudinary } from 'cloudinary'
import { resolve } from 'path'

cloudinary.config({
    cloud_name : "dcd7n7hgv" ,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
    secure : true
})

export const uploadToCloudinary = (fileBuffer : any) => {
  return new Promise((resolve, reject) => {
    console.log("Starting Cloudinary upload..."); // Debugging log
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error); // Debugging log
          reject(error);
        } else {
          console.log("Cloudinary Upload Result:", result); // Debugging log
          resolve(result);
        }
      }
    );
    // this is the debugging log in the cloudinary services to store photos and then convert it to a link and store it on the cloudinary service 

    uploadStream.end(fileBuffer);
  }); 
};



