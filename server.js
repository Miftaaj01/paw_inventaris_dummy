require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const inventoryRouter = require("./routes/inventory");
const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);
app.use("/inv", inventoryRouter);
app.use("/item", itemRouter);

app.listen(process.env.PORT, () => console.log("Server started"));
