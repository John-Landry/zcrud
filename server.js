const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello john');
})

app.get('/johnpage', (req, res) => {
    res.send('john---------- page');
})


mongoose.connect(
    'mongodb+srv://johnclandry:hDqIrxpChOdvMDKc@cluster0.emu6y.mongodb.net/?retryWrites=true&w=majority'
)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
