const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Rabyn:moles900@cluster0.zeqhj5o.mongodb.net/Shopy').then((data) => {

  app.listen(5000);
}).catch((err) => {
  console.log(err);
})
app.use(morgan('dev'));


app.use(productRoutes);

app.use((req, res) => {
  return res.status(404).json({
    status: 'error',
    message: 'not found'
  });
});



