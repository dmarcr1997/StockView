import mongoose from 'mongoose';

const database = {
    db: 'mongodb://localhost:27017/StockView'
};

export const connect = (url = database.db, opts={}) => {
    return mongoose.connect(url,
        {...opts, useNewUrlParser: true}
    )
}