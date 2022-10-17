"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("../models/user");
const CrudController_1 = require("./CrudController");
class UserController extends CrudController_1.CrudController {
    create(req, res) {
        user_1.Users.create(req.body)
            .then(users => res.json(users))
            .catch(err => {
            console.log(err);
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.UserController = UserController;
;
