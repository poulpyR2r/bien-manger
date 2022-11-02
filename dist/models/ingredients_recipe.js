"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients_recipes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class ingredients_recipes extends sequelize_1.Model {
}
exports.ingredients_recipes = ingredients_recipes;
ingredients_recipes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "ingredients_recipes",
    timestamps: false
});
