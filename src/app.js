import express from "express";
import cors from "cors";
import usersRouter from "./routes/user.route.js";
import { startDB } from "./utils/index.js";

const app = express();

//MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/user", usersRouter);

//SERVER
app.listen(4000, () => {
  startDB();
  console.log("Server run port", 4000);
});
