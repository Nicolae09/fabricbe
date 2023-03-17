const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3500;

// Cors
app.use(cors({
    origin: process.env.CORS_ALLOW_LOCAL,
    credentials: true
}));


app.get('/request-movie', ({query: {movieName}}, res) => {
    fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=${process.env.MOVIES_API_KEY}`)
        .then(async result =>  res.json(await result.json()));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
