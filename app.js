const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://lucas:lucas@cluster0.pw2uxb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }).then(() => {
    console.log('Connected to database'); 
  }).catch((err) => {
    console.log('Failed to connect to database', err);
});

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/api`);
})

