import db from "../database/connection.js";

export const startDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
