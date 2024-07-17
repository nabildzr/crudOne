import { Sequelize } from "sequelize";

const db = new Sequelize('biyogsbecxqwhtyxlmcu', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
