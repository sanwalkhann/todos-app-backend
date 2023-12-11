const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routes = require('./routes/routes.js'); 
const cors = require('cors')


dotenv.config();

const app = express();


app.use(cors())
app.use(bodyParser.json());


app.use('/api', routes);
mongoose.connect(process.env.MONGO_URL)
 mongoose.connection.once("connected",()=>{
    console.log("Database Connected")
 })


 app.listen(process.env.PORT,()=>{
    console.log(`Server is running on: ${process.env.PORT}`)
 })