import express from "express";

const { Router } = express;
const indexRoutes = new Router();

indexRoutes.get("/", async (req, res) => {
  res.render("index", {});
});

export default indexRoutes;
