const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://urbsoft:ckE7VWXaey6lIaeB@cluster0.eaethnk.mongodb.net/db-users?retryWrites=true&w=majority" ||
  process.env.DB_HOST;
const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
