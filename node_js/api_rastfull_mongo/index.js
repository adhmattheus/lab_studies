const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();


//forma de ler JSON / middleswares
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

//rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ message: 'start server...' })
});

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)


mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.cyikqsy.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  ).then(() => {
    console.log('banco de dados conectado');
    app.listen(3000)
  })
  .catch((err) => console.log(err))
//porta da aplicacao
