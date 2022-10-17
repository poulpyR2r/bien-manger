"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = require("bcrypt");
const constants_1 = require("../config/constants");
const user_1 = require("../models/user");
const CrudController_1 = require("./CrudController");
class UserController extends CrudController_1.CrudController {
    async signin(req, res) {
        let userInfo = req.body;
        userInfo.password = await (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND);
        user_1.Users.create(req.body)
            .then(users => {
            let name = users.lastname;
            let msg = "l'utilisateur  " + name + " a été ajouté";
            res.json({ "message ": msg });
        })
            .catch(err => {
            console.log(err); //trop d'informations de la console ne pas mettre ça en prod /!\
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.UserController = UserController;
;
