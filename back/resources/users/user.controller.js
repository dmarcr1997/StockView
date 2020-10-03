import { User } from './user.model.js';

const getMany = async (req, res) => {
    const allUsers = await User.find({})
    res.status(200).json({allUsers})
    
}

const getOne = async (req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id})
        res.status(200).json({ user })    
    }
    catch {
        res.status(400).json({error: 'cannot find user with that id'})
    }
}
export default {
    getMany,
    getOne,
}