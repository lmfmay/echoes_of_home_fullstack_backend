import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/conn.mjs';
import apiRoutes from './routes/apiRoutes.mjs';
import talentRoutes from './routes/talentRoutes.mjs';

//setups
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/api/audioProfiles", apiRoutes); //get list of prebuilt voices from PlayHT API
app.use("/api/talents", talentRoutes); //CRUD capabilities for Talent Collection
  

//listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));