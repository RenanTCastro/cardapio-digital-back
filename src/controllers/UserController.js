const knex = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "11FF09E"

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

  // register user
  async register (req, res, next){
    try{
      
      const {email, password, user_name} = req.body;
      
      const hashedPassword = bcrypt.hashSync(password, 10);

      await knex("users").insert({email, password: hashedPassword, user_name});

      const token = jwt.sign({email}, PRIVATE_KEY, {expiresIn: "1h"})

      return res.status(201).json({ token });
     
    } catch(error){
      next(error)
    }
  },

  // login user
  async login (req, res, next){

    try {
        console.log(knex("users").email);
    } catch(error) {
      next(error)
    }
    
  }
};
