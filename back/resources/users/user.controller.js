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

const createOne = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).send(user)
    }
    catch(e) {
        res.status(400).send({error: e.message})
    }
}
export default {
    getMany,
    getOne,
    createOne
}