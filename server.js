const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModels.js')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello john');
})

app.get('/john', (req, res) => {
    res.send('john----------page');
})

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb+srv://johnclandry:hDqIrxpChOdvMDKc@cluster0.emu6y.mongodb.net/?retryWrites=true&w=majority'
)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(8080, () => {
            console.log('Server is running on port 8080');
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
