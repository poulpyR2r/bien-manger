import { log } from "console";
import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read, readFileSync } from "fs";
import { ParsedQs } from "qs";
import { QueryTypes } from "sequelize";
import { sequelize } from "../config/database";
import { CrudController } from "./CrudController";
import { Ingredient } from "../models/ingredient";

export class IngredientsController extends CrudController {
  public create(req: Request, res: Response): void {  
    


  }

  public async read(req: Request, res: Response): Promise<void> {
    const ingredients = await sequelize.query(
      "SELECT * FROM ingredients WHERE id=?",
      { replacements: [req.params.id], type: QueryTypes.SELECT }
    );
    console.log('log', ingredients[0]);
    res.json(ingredients[0]);
  }

  update(req: Request, res: Response): void {}
    

  delete(req: Request, res: Response): void {}
}