const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const connectDB = require('./database')
const mongoose = require('mongoose');
const { tokenValidated } = require('./src/autentication/auth');

const app = express();
const port = 3001;

connectDB();
app.use(express.json());
app.use('/', userRoutes);

app.use('*', tokenValidated);

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/`);
})

