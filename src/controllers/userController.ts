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
 

  public async login(req: Request, res: Response): Promise<void> {
    
    const plainPassword = req.body.password;
    const mail = req.body.mail;

    const user = await Users.findOne({ where: {mail: mail} });
    
    if(user === null) {
      res.json('login invalide');
      return;
     }
    const bMatch = await compare(plainPassword, user!.password);
    if(!bMatch) {
      res.json('login invalide');
    }

    const permissions = await Permission.findByPk(user.idPermission);
    if(permissions === null ){

      res.status(status.UNAUTHORIZED).json('invalid credantials')
      return;
    };

    

    res.json({'token' : generateToken(user.lastname, user.mail, permissions.role)})
    

    

  }


  update(req: Request, res: Response): void {}

  delete(req: Request, res: Response): void {}

}; 