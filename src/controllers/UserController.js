const knex = require("../database");

module.exports = {
  async gerarQRCode(req, res) {
    try {
      res.send("Ok");
    } catch (error) {
      next(error);
    }
  },
};
