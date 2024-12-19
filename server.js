const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello john');
})

app.get('/johnpage', (req, res) => {
    res.send('johnpage');
})

app.listen(4000, () => {
    console.log('Server is running on port 3000');
})