import mongoose from "mongoose";
import projectSchema from "./projectSchema.mjs";


const talentSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
// profileimg: { type: [CloudinaryFileSchema] },
about: { type: String },
voice_sample: {type: String },
projects: { type: [projectSchema] },
gender: { type: String },
languages: [{
    language: { type: String },
    accent: { type: String },
}]
});


export default mongoose.model('Talent', talentSchema);