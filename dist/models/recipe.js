"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const course_1 = require("./course");
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
Recipe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    guests: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idCourse: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: course_1.Course,
            key: "id",
        },
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "recipes",
    createdAt: "created_At",
    updatedAt: "updated_At",
});
Recipe.belongsTo(course_1.Course, { foreignKey: "idCourse" });
course_1.Course.hasOne(Recipe, { foreignKey: "idCourse" });
