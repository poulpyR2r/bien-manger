"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const jwt_1 = require("./authenticate/jwt");
const ingredients_1 = require("./routes/ingredients");
const constants_1 = require("./config/constants");
const recipe_1 = require("./routes/recipe");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
const allowedOrigin = ['http://localhost:8080'];
const options = {
    origin: allowedOrigin,
};
if (process.env.NODE_ENV !== 'production') {
    console.log('le token JWT :', (0, jwt_1.generateToken)("guewen", "guewencarre2@gmail.com", "administrateur"));
}
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.put('/recipe/update/:id', recipe_1.router);
app.get('/recipe/show/:id', recipe_1.router);
app.post('/recipe/add', recipe_1.router);
app.post('/users/sign-in', user_1.authenticatRouter);
app.post('/users/login', user_1.authenticatRouter);
app.get("/ingredient/show/:id", ingredients_1.ingredientRouter);
app.listen(constants_1.PORT, () => {
    console.log(`Server  is listening on port ${constants_1.PORT}`);
});
