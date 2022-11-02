


require('dotenv').config();
import cors from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';

import {PORT} from './config/constants';

import { router } from './routes/recipe';
import { authenticatRouter } from './routes/user';



const app = express();
const allowedOrigin = ['http://localhost:8080'];

const options: cors.CorsOptions = {
    origin: allowedOrigin,
}

if  (process.env.NODE_ENV !== 'production'){
    console.log('le token JWT :', generateToken("guewen" , "guewencarre@gmail.com" ,"administrateur"))
}

app.use(cors());
app.use(express.json());


app.put('/recipe/update/:id',router);
app.get('/recipe/show/:id',router);
app.post('/recipe/add',router);
app.post('/users/sign-in', authenticatRouter);
app.post('/users/login', authenticatRouter);




app.listen(PORT, ()=> {

    console.log(`Server  is listening on port ${PORT}`)

});


