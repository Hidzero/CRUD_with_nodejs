const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const connectDB = require('./database')
const mongoose = require('mongoose');


const app = express();
const port = 3000;

connectDB();
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/user/:idUser/book/:idBook', (req, res) => {
  const { idUser, idBook } = req.params;
  res.send(`User: ${idUser} - Book: ${idBook}`);
})

app.get('/', (req, res) => {
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/api/users/`);
})

