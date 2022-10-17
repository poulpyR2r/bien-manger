"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const recipe_1 = require("../models/recipe");
const CrudController_1 = require("./CrudController");
class RecipeController extends CrudController_1.CrudController {
    async create(req, res) {
        recipe_1.Recipe.create(req.body)
            .then(recipe => res.json(recipe))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
    async read(req, res) {
        recipe_1.Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(err => { console.log(err); res.json("error"); });
    }
    async update(req, res) {
        let id = req.params.id;
        let recipeUpdate = req.body;
        recipe_1.Recipe.findByPk(id)
            .then(recipe => {
            if (recipe != null) {
                recipe.set(recipeUpdate);
                recipe.save();
                res.json({ 'message': 'update done' });
            }
            else {
                res.json({ 'message': 'no recipe with id $(id)' });
            }
        })
            .catch(err => {
            console.log(err);
            res.json("Update impossible");
        });
    }
    async delete(req, res) { }
}
exports.RecipeController = RecipeController;
;
