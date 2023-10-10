const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
