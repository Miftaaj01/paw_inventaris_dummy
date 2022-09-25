require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const inventoryRouter = require("./routes/inventory");
const userRouter = require("./routes/user");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);
app.use("/inv", inventoryRouter);

app.listen(process.env.PORT, () => console.log("Server started"));
