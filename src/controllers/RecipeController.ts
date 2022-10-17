import { create } from "domain";
import { Request, Response } from "express";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";
import { CrudController } from "./CrudController";




export class RecipeController extends CrudController {

  public async create(req: Request, res: Response): Promise<void> {
    Recipe.create(req.body)
    .then(recipe =>res.json(recipe))

    .catch(err => {

      res.json({'message':'insertion impossible'})

    })

  }
 

   public async read(req: Request, res: Response): Promise<void> {
    
    Recipe.findByPk(req.params.id) .then(recipe => res.json(recipe)).catch(err => {console.log(err); res.json("error");});

  }



  
  public async update(req: Request, res: Response): Promise<void>{
      let id = req.params.id
      let recipeUpdate = req.body;

      Recipe.findByPk(id)
      .then(recipe => {
        if (recipe != null ){
          recipe.set(recipeUpdate);
          recipe.save();
          res.json ({'message':'update done'});
        }else{
          res.json({'message':'no recipe with id $(id)'})
        }
      })


      
      .catch(err => {
        console.log(err); 
        res.json("Update impossible");
      });


  }
  

  public async delete(req: Request, res: Response): Promise<void>{}

}; 