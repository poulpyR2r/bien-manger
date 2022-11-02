import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database' 



export class ingredients_recipes extends Model{

    declare idIngredient: number;
    declare idRecipe: number;
    declare quantity: number;

}


ingredients_recipes.init({
    id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
     name: {
          type: DataTypes.STRING,
          allowNull: true
         },
    },



    {
    sequelize,
    tableName: "ingredients_recipes",
    timestamps: false
    }
    );
    