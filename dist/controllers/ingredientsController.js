"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsController = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const CrudController_1 = require("./CrudController");
class IngredientsController extends CrudController_1.CrudController {
    create(req, res) {
    }
    async read(req, res) {
        const ingredients = await database_1.sequelize.query("SELECT * FROM ingredients WHERE id=?", { replacements: [req.params.id], type: sequelize_1.QueryTypes.SELECT });
        console.log('log', ingredients[0]);
        res.json(ingredients[0]);
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.IngredientsController = IngredientsController;
