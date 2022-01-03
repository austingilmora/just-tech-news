const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //TABLE COLUMNS GO HERE
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //TABLE CONFIGURATION OPTIONS GO HERE

        //pass in sequelize connection
        sequelize,
        //DONT auto create timestamp fields 
        timestamps: false,
        //DONT pluralize name of database table 
        freezeTableName: true,
        // use underscores instead of camel-casing 
        underscored: true,
        // make is so our model name stays lowercase in the db
        modelName: 'user'
    }
);

module.exports = User;