


require('dotenv').config();
import cors from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';

import {PORT} from './config/constants';

import { router } from './routes/recipe';



const app = express();
const allowedOrigin = ['http://localhost:8080'];

const options: cors.CorsOptions = {
    origin: allowedOrigin,
}

app.use(cors());
app.use(express.json());



app.get('/recipe/show/:id',router);
console.log('le token est :', generateToken());


app.listen(PORT, ()=> {

    console.log(`Server  is listening on port ${PORT}`)

});


