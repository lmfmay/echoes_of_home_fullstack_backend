import Talent from '../models/talentSchema.mjs';

async function getAllTalent(req, res){
    try {
        let allTalent = await Talent.find({});
        res.json(allTalent);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server error'})
    }
}

async function createTalent(req,res){
    try {
        let newTalent = new Talent(req.body);
        await newTalent.save();
        res.json(newTalent);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server error'});
    }
}

async function getOneTalent(req,res){
    try {
        let oneTalent = await Talent.findById(req.params.id);
        res.json(oneTalent);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Server error'});
    }
}

export default {getAllTalent, createTalent, getOneTalent}