const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const routes = require('./routes/routes.js');

dotenv.config();

const app = express();

app.use(cors()); 

app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.once('connected', () => {
  console.log('Database Connected');
});

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on: ${process.env.PORT}`);
});
