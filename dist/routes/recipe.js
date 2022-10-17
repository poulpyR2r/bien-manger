"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const Auth = __importStar(require("../middleware/authenticate"));
const RecipeController_1 = require("../controllers/RecipeController");
const recipeController = new RecipeController_1.RecipeController();
exports.router = express_1.default.Router({
    strict: true,
});
exports.router.route('/recipe/update/:id').put(Auth.authorize(['putRecipe']), recipeController.update);
exports.router.route('/recipe/show/:id').get(Auth.authorize(['getRecipeList']), recipeController.read);
exports.router.route('/recipe/add').post(Auth.authorize(['postRecipe']), recipeController.create);
// router.route('/recipe/add',).get(req :Request, res :Response) promises<void> => recipeController.create
// router.route('/recipe/show/:id').get(recipeController.read);
