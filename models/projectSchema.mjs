import mongoose from "mongoose";

// schema created from cloudinary
//stretch goal
// const CloudinaryFileSchema = new mongoose.Schema({
//     public_id: { type: String, required: true }, // Cloudinary file ID
//     url: { type: String, required: true }, // File URL
//     type: { type: String }, // File type (e.g., image/jpeg, audio/mp3)
//     size: { type: Number }, // File size in bytes
//   });

export const projectSchema = new mongoose.Schema({
    title: { type: String },
    //file: { type: [CloudinaryFileSchema] },
    description: { type: String },
    category: { type: String },
    favorite: {type: Boolean },
    })

export default mongoose.model('Project', projectSchema);