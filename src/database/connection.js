import { Sequelize } from "sequelize";

const db = new Sequelize("brm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
