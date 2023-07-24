const express =require('express');
const morgan=require('morgan');//morgan is a middleware which is used in http request
const bodyParser=require('body-parser')
const dotenv=require('dotenv');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');
const authRoutes =require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const app=express();
dotenv.config();

connectDB();
//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

app.listen(5000,()=>{
    console.log("app is  listning on port 5000");
})