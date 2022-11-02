import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database' 
//import { User } from './User';

export class Permission extends Model
{
    declare id: number;
    declare role: string;
}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
{
    sequelize,
    tableName: "permissions",
    timestamps: false
}
);
