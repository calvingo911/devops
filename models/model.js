import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("web", "root", "calvin", {
  host: "bbkal-db",
  dialect: "mysql",
});

export { sequelize, DataTypes };
