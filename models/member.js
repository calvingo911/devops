import {sequelize, DataTypes} from "./model.js"

const Member = sequelize.define('member', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.TINYINT,
    role: DataTypes.STRING
})

export default Member;