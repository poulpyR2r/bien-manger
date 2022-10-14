import { create } from "domain";

import { Request, Response } from "express";

import { ParamsDictionary } from "express-serve-static-core";

import { read } from "fs";

import { ParsedQs } from "qs";

import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";

import { CrudController } from "./CrudController";




export class userController extends CrudController {

  create(req: Request, res: Response): void {}

 




  update(req: Request, res: Response): void {}

  delete(req: Request, res: Response): void {}

}; 