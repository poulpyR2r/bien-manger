import express, {Request, Response} from 'express';
import { UserController } from '../../controllers/UserController';

import * as Auth    from '../../middleware/authenticate';
const userController = new UserController();

export const autenticateRouter = express.Router({
    strict: true,
});

autenticateRouter.route('/signin').post(userController.signin)
autenticateRouter.route('/login').post(userController.login)