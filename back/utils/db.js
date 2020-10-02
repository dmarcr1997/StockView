import mongoose from 'mongoose';

const config = {
    db: 'mongodb://localhost:27017/local'
};

export const connect = (url=config.db, opts={}) => {
    return mongoose.connect(
      url,
      { ...opts, useNewUrlParser: true, useUnifiedTopology: true }
    )
  }

connect()