import express from 'express';
import bodyPkg from 'body-parser';
const { json, urlencoded } = bodyPkg;
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db.js';
import userRouter from './resources/users/user.routes.js';
import stockRouter from './resources/stocks/stock.routes.js';


//setup
const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => res.send({message: 'hi'}));
app.use('/users', userRouter);
app.use('/stocks', stockRouter);

//port setup
const port = process.env.PORT || 4000;
const start = async () => {
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
export {start, app}