"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authenticate/jwt");
const constants_1 = require("../config/constants");
const user_1 = require("../models/user");
const CrudController_1 = require("./CrudController");
const http_status_1 = require("http-status");
class AuthenticateController extends CrudController_1.CrudController {
    async login(req, res) {
        const mail = req.body.mail;
        const plainPassword = req.body.password;
        const user = await user_1.Users.findOne({ where: { mail: mail } });
        if (user) {
            res.status(http_status_1.status.UNAUTHORIZED).json({ message: "Invalid credential" });
            return;
        }
        const bMacth = await (0, bcrypt_1.compare)(plainPassword, user.password);
        if (!bMacth) {
            res.status(http_status_1.status.UNAUTHORIZED).json({ message: "Invalid credential" });
        }
        const permissions = await Permission.findByPk(user.idPermission);
        res.status(http_status_1.status.OK).json({ 'token': (0, jwt_1.generateToken)(user.lastname, permissions.role) });
    }
    /**
     * signin
     */
    signin(req, res) {
        let userInfo = req.body;
        (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND)
            .then((hashedPassword) => {
            userInfo.password = hashedPassword;
            user_1.Users.create(userInfo)
                .then((user) => {
                let name = user.lastname;
                let msg = "L'utilisateur " + name + " a bien été ajouté.";
                res.json({ message: msg });
            })
                .catch((err) => {
                console.log(err);
                res.json({ message: "Insertion impossible." });
            });
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible." });
        });
    }
    create(req, res) { }
    async read(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.AuthenticateController = AuthenticateController;
