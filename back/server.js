import express from 'express';
import json from 'body-parser';
import urlencoded from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from 'mongoose';

//setup
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => res.send({message: 'hi'}))


//port setup
const port = process.env.PORT || 4000;
export const start = async () => {
    try {
        await connect()
        app.listen(port, () => {
            console.log('Connected to Port ' + port);
        })
    }
    catch (e) {
        console.log(e);
    }
}