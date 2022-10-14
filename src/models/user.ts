import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Course } from './course';

export class User extends Model
{
    public id!: number;
    public lastname!: string;
    public firstname!: string;
    public mail!: string;
    public password! : string;
    public idPermission! : number;
  
}



User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idPermission: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

},
{
    sequelize,
    tableName: "user"
    
    
});

