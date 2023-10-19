// const knex = require("../database");

var QRCode = require("qrcode");
const PDFDocument = require("pdfkit");

module.exports = {
  async gerarQRCode(req, res, next) {
    try {
      const { user_name, user_id } = req.body;

      const data = `http://localhost:3001/${user_name}/${user_id}`;

      const qrCode = await QRCode.toBuffer(data);

      const doc = new PDFDocument({ size: "A4" });

      doc.image(qrCode, 125, 250, { width: 350 });
      doc.pipe(res);
      doc.end();
    } catch (error) {
      console.log("Erro ao gerar o QR code e o PDF:", error);
      next(error);
    }
  },
};
