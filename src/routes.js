const express = require("express");
const routes = express.Router();

// Controllers
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");

// User routes
routes.post("/gerar-qr", UserController.gerarQRCode);

// Product routes
routes.post("/adiciona-produto", ProductController.adicionaProduto);
routes.put("/atualizar-produto/:product_id", ProductController.editarProduto);
routes.get("/buscar-produto", ProductController.buscarProdutos);
routes.delete("/deletar-produto/:product_id", ProductController.deletarProduto);

module.exports = routes;
