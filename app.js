const express = require("express");
const app = express();
const db = require("./config/mongooseConnection");
const path = require("path");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const indexRouter = require("./routes/indexRouter");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);

app.use(flash());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.use("/", indexRouter);

app.listen(3000);
