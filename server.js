const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/connectDB");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


//port config
const port = process.env.PORT || 8081
app.listen(port,(err)=> err ? console.log(err) : console.log("server is running on port :",port))