"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userController = new userController_1.UserController();
exports.authenticatRouter = express_1.default.Router({
    strict: true,
});
exports.authenticatRouter.route('/users/login').post(userController.create);
exports.authenticatRouter.route('/users/sign-in').post(userController.create);
