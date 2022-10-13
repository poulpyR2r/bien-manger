"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => res.send('Hello world'));
app.listen(constants_1.PORT, () => {
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
