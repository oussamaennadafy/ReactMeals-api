const mongoose = require("mongoose");

const connectDb = () => {
  const DB = process.env.DATABASE_URL.replace(
    "<DATABASE_PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, { useNewUrlParser: true })
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log("error occure while connecting to the DB"));
};

module.exports = connectDb;
