"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authenticate/jwt");
const constants_1 = require("../config/constants");
const user_1 = require("../models/user");
const CrudController_1 = require("./CrudController");
const http_status_1 = __importDefault(require("http-status"));
const permission_1 = require("../models/permission");
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
    async login(req, res) {
        const plainPassword = req.body.password;
        const mail = req.body.mail;
        const user = await user_1.Users.findOne({ where: { mail: mail } });
        if (user === null) {
            res.json('login invalide');
            return;
        }
        const bMatch = await (0, bcrypt_1.compare)(plainPassword, user.password);
        if (!bMatch) {
            res.json('login invalide');
        }
        const permissions = await permission_1.Permission.findByPk(user.idPermission);
        if (permissions === null) {
            res.status(http_status_1.default.UNAUTHORIZED).json('invalid credantials');
            return;
        }
        ;
        res.json({ 'token': (0, jwt_1.generateToken)(user.lastname, user.mail, permissions.role) });
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.UserController = UserController;
;
