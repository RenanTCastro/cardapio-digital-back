const knex = require("../database");

module.exports = {
  async adicionaProduto(req, res) {
    try {
      await knex("product").insert(req.body);
      return res
        .status(201)
        .json({ message: "Produto adicioando com sucesso." });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao adicionar o novo produto." });
    }
  },

  async buscarProduto(req, res) {
    try {
      const result = await knex("product").select("*");
      return res.json(result); 
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar produtos." });
    }
  },

  async editarProduto(req, res) {
    try {
      await knex("product").update(req.body).where(req.params);
      return res
        .status(200)
        .json({ message: "Produto atualizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: "Error ao atualizar produto." });
    }
  },

  async deletarProduto(req, res) {
    try {
      await knex("product").where(req.params).delete();
      return res.status(200).json({ message: "Produto deletado com sucesso." });
    } catch (error) {
      return res.status(500).json({ error: "Error ao deletar produto." });
    }
  },
};
