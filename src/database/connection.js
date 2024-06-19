import { Sequelize } from "sequelize";

// * PRODUCTION
const db = new Sequelize(
  "mysql://root:UhOqIWsXuTYwUxayOmTRozBycxGxmSEZ@roundhouse.proxy.rlwy.net:46434/railway",
  {
    dialect: "mysql",
    logging: false,
  }
);

// * DEVELOPMENT
/* const db = new Sequelize("brm", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false
}); */

export default db;
