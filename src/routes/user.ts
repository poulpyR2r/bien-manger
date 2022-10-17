import express, {Request, Response, Router} from 'express';
import * as Auth from '../middleware/authenticate'
import { RecipeController } from '../controllers/RecipeController';
import { UserController } from '../controllers/userController';



const userController = new UserController();



export const authenticatRouter = express.Router({

    strict: true,   

});

authenticatRouter.route('/users/login').post(userController.signin);
authenticatRouter.route('/users/sign-in').post(userController.signin);
