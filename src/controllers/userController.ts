import { hash, hashSync, compare} from "bcrypt";
import { INSPECT_MAX_BYTES } from "buffer";
import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { generateToken } from "../authenticate/jwt";
import { BCRYPT_ROUND } from "../config/constants";
import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";
import { Users } from "../models/user";
import { CrudController } from "./CrudController";
import status from "http-status";
import { Permission } from "../models/permission";
import { resolve } from "path";









export class UserController extends CrudController {

  public async signin (req: Request, res: Response): Promise<void> {
    let userInfo = req.body
    userInfo.password = await hash(userInfo.password, BCRYPT_ROUND);
    Users.create(req.body)
    .then(users =>{
      let name = users.lastname;
      let msg = "l'utilisateur  "+name+" a été ajouté";
      res.json({"message ": msg})})
    .catch(err => {
      console.log(err); //trop d'informations de la console ne pas mettre ça en prod /!\
      res.json({'message':'insertion impossible'})

    })
  }
 

  public async login(req: Request, res: Response): Promise<any> {
    const mail = req.body.mail;
    const plainPassword = req.body.password;

    const user = await Users.findOne({ where: { mail:mail } });
    if (user == null) {
      // console.log("User", user.lastname, user.idPermission);
      res.json({message: "User not found"});
      return;
    } 

    const permisson = await Permission.findByPk(user!.idPermission);
    const bMacth = await compare(plainPassword, user!.password);

  //   if (!bMacth) {
  //     res.status(status.UNAUTHORIZED).json({ message  : "Invalid credential" });
  // }
  res.status(status.OK).json({'token' : generateToken(user!.lastname, user!.mail, permisson!.role)});
  }


  update(req: Request, res: Response): void {}

  delete(req: Request, res: Response): void {}

}; 