import { create } from "domain";

import { Request, Response } from "express";

import { ParamsDictionary } from "express-serve-static-core";

import { read } from "fs";

import { ParsedQs } from "qs";

import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";

import { CrudController } from "./CrudController";




export class RecipeController extends CrudController {

  public async create(req: Request, res: Response): Promise<void> {}

 

   public async read(req: Request, res: Response): Promise<void> {
    
    Recipe.findByPk(req.params.id) .then(recipe => res.json(recipe)).catch(err => {console.log(err); res.json("error");});

  }



  
  public async update(req: Request, res: Response): Promise<void>{}
  

  public async delete(req: Request, res: Response): Promise<void>{}

}; 