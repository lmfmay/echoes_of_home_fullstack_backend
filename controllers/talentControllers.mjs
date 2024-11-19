import Talent from '../models/talentSchema.mjs';

async function getAllTalent(req, res){
    try {
        let allTalent = await Talent.find({});
        res.json(allTalent)
    } catch (error) {
        console.error(error)
        res.status(500).json({msg: 'Server error'})
    }
}

export default {getAllTalent}