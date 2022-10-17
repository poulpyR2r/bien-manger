import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";
import { Users } from "../models/user";
import { CrudController } from "./CrudController";






export class UserController extends CrudController {

  public create(req: Request, res: Response): void {

    Users.create(req.body)
    .then(users =>res.json(users))
    .catch(err => {
      console.log(err); 
      res.json({'message':'insertion impossible'})

    })
  }
 
  update(req: Request, res: Response): void {}

  delete(req: Request, res: Response): void {}

}; 