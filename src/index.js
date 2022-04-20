import express from "express";
import indexRoutes from "./routes/indexRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/products", productRoutes);

app.listen(3004, () => {
  console.log("server is running on port 3004");
});
