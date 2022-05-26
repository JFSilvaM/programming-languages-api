const express = require("express");
const app = express();
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});

app.use("/programming-languages", programmingLanguagesRouter);

// ERROR HANDLER MIDDLEWARE
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  console.error(error.message, error.stack);

  res.status(statusCode).json({ message: error.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
