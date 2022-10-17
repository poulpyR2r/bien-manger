import express, {Request, Response, Router} from 'express';
import * as Auth from '../middleware/authenticate'
import { RecipeController } from '../controllers/RecipeController';



const recipeController = new RecipeController();



export const router = express.Router({

    strict: true,   

});

router.route('/recipe/update/:id').put(Auth.authorize(['putRecipe']), recipeController.update);
router.route('/recipe/show/:id').get(Auth.authorize(['getRecipeList']), recipeController.read);
router.route('/recipe/add').post(Auth.authorize(['postRecipe']), recipeController.create);
// router.route('/recipe/add',).get(req :Request, res :Response) promises<void> => recipeController.create
// router.route('/recipe/show/:id').get(recipeController.read);