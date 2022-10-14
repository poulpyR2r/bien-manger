
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("bien_manger", "root", "",{
    host :'localhost',
    dialect:'mysql'
})