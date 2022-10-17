import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Course } from './course';
export class Recipe extends Model { 

    public id!: number; 
  
    public name!: string; 
  
    public slug!: string; 
  
    public description!: string; 
  
    public guests!: number; 
  
    public idCourse!: number; 
  
    public created_At!: Date; 
  
    public updated_At!: Date; 
  
  } 
  
   
   
  
  Recipe.init( 
  
    { 
  
      id: { 
  
        type: DataTypes.INTEGER, 
  
        autoIncrement: true, 
  
        primaryKey: true, 
  
      }, 
  
      name: { 
  
        type: DataTypes.STRING, 
  
         
  
        allowNull: false, 
  
      }, 
  
      slug: { 
  
        type: DataTypes.STRING, 
  
        allowNull: false, 
  
        unique: true, 
  
      }, 
  
      description: { 
  
        type: DataTypes.STRING, 
  
        allowNull: true, 
  
      }, 
  
   
   
  
      guests: { 
  
        type: DataTypes.INTEGER, 
  
      }, 
  
      idCourse: { 
  
        type: DataTypes.INTEGER, 
  
        allowNull: false, 
  
        references: { 
  
          model: Course, 
  
          key: "id", 
  
        }, 
  
      }, 
  
     
  
    }, 
  
    { 
  
      sequelize, 
  
      tableName: "recipes", 
      createdAt: "created_At", 
      updatedAt: "updated_At", 
  
    } 
  
  ); 
  
   
   
  
  Recipe.belongsTo(Course, { foreignKey: "idCourse" }); 
  
  Course.hasOne(Recipe, { foreignKey: "idCourse" }); 
  
   
   
 
