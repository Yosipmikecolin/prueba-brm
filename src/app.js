import express from "express";
import cors from "cors";
import usersRouter from "./routes/user.route.js";
import productsRouter from "./routes/products.route.js";
import purchaseRoutes from "./routes/purchase.route.js"
import TablesRoutes from "./routes/syncup.route.js"
import { startDB } from "./utils/index.js";

const app = express();

//MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/api/user", usersRouter);
app.use("/api/products", productsRouter);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/create-tables', TablesRoutes);

//SERVER
app.listen(4000, () => {
  startDB();
  console.log("Server run port", 4000);
});
