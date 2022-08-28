const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            age: DataTypes.INTEGER,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.BOOLEAN

        }, {
            sequelize
        })
    }
}

module.exports = User;