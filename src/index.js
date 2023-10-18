const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
