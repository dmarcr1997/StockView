import { Stock } from './stock.model.js';

const getMany = async (req, res) => {
    const allStocks = await Stock.find({})
    res.status(200).json({allStocks})
}

const getOne = async (req, res) => {
    try{
        const stock = await Stock.findOne({_id: req.params.id})
        res.status(200).json({ stock })    
    }
    catch {
        res.status(400).json({error: 'cannot find user with that id'})
    }
}

export default {
    getMany,
    getOne,
}