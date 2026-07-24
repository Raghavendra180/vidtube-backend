import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary. File src: " + response.url);
    // once the file is uploaded, we would like to delete it from our server
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

const deleteFromCloudinary = async (cloudinaryUrl) => {
  try {
    if (!cloudinaryUrl) return null;

    // Extract the public_id from the Cloudinary URL
    const publicId = cloudinaryUrl.split("/").pop().split(".")[0];

    const response = await cloudinary.uploader.destroy(publicId);
    console.log("File deleted from cloudinary. Public ID: " + publicId);
    return response;
  } catch (error) {
    console.log("Error while deleting file from cloudinary: ", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
