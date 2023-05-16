const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const getIpAdress = require("./helper/getIpAddress");

const IP = getIpAdress();

process.on("uncaughtException", (err) =>
{
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const connectDB = require("./config/database");
connectDB();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
{
  console.log(
    `Server running in ${process.env.NODE_ENV} mode...`
  );
});

process.on("unhandledRejection", (err) =>
{
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() =>
  {
    process.exit(1);
  });
});
