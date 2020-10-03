import { Stock } from './stock.model.js';

const getMany = async (req, res) => {
    const allStocks = await Stock.find({})
    res.status(200).json({allStocks})
}

export default {
    getMany,
}