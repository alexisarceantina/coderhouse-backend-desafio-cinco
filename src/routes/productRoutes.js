import express from "express";
import productsApi from "../apis/products";

const { Router } = express;
const productRoutes = new Router();

productRoutes.get("/", async (req, res) => {
  try {
    const response = await productsApi.get("/productos");
    res.render("products", { products: response.data });
  } catch (error) {
    console.log(error);
    res.render("products", { products: [] });
  }
});

productRoutes.get("/register", async (req, res) => {
  res.render("register", {});
});

productRoutes.post("/register", async (req, res) => {
  if (req.body.title) {
    const data = { ...req.body };
    await productsApi.post("/productos", data);

    res.redirect("/products");
  } else res.status(400).send({ error: "debe indicar el nombre del producto" });
});

export default productRoutes;
