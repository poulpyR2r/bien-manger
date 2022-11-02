"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientRouter = void 0;
const express_1 = __importDefault(require("express"));
const ingredientsController_1 = require("../controllers/ingredientsController");
const ingredientsController = new ingredientsController_1.IngredientsController();
exports.ingredientRouter = express_1.default.Router({
    strict: true,
});
exports.ingredientRouter.route("/ingredient/show/:id").get(ingredientsController.read);
exports.ingredientRouter.route("/recipe/add").post(ingredientsController.create);
exports.ingredientRouter.route("/recipe/update/:id").put(ingredientsController.update);
