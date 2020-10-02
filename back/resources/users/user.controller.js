import { User } from './user.model.js';

const getMany = async (req, res) => {
    const allUsers = await User.find({})
    res.status(200).json({allUsers})
    
}

export default {
    getMany
}