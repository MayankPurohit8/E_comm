const express = require("express");
const app = express();
const db = require("./config/mongooseConnection");
const path = require("path");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "public")));
app.set("view engine", "ejs");
app.use(cookieParser());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3000);
