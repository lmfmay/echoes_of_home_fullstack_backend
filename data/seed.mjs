//Running node seed.mjs in terminal to seed database instead of creating route since this is a one-time effort.
import connectDB from "../config/conn.mjs";
import dotenv from 'dotenv';
import Talent from "../models/talentSchema.mjs";
import talents from "./data.mjs";

dotenv.config({ path: '../.env' });

async function seedDatabase() {
    try {
        // Clean up the existing data
        await Talent.deleteMany({});

        // Insert new data
        const createdTalents = await Talent.insertMany(talents);

        console.log('Talents seeded:', createdTalents);
        console.log('Seeding completed!');

        process.exit();  // Exit once the seeding is done

    } catch (err) {
        console.error('Error seeding database:', err.message);
        process.exit(1);  // Exit with failure
    }
}

const main = async () => {
    await connectDB();    // Connects to the database
    await seedDatabase(); // Seeds the database after connection is established
};

main()