'use strict'

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        userName: {
            type: DataTypes.STRING,
            required: true
        },

        password: {
            type: DataTypes.STRING,
            required: true
        }
    }
);
    return users;
};
