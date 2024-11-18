import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

//.env variables
const userID = process.env.USER_ID;
const apiKey = process.env.API_KEY;

// Get All Exercises
async function getAIVoices(req, res) {
    const options = {
        method: 'GET',
        url: 'https://api.play.ht/api/v2/voices',
        headers: {
          accept: "application/json",
          AUTHORIZATION: `${apiKey}`,
          'X-USER-ID': `${userID}`,
        }
      };
      try {
        const response = await axios.request(options);
        res.json(response.data)
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
  }

  export default {getAIVoices}