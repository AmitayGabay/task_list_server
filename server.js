const express = require("express");
const { routesInit } = require("./routes/baseRouts");
require("dotenv").config();
require("./mongoConnect");

const app = express();

// Allows the app to get a json format
app.use(express.json());
app.all('*', (req, res, next) => {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token,apiKey');
    next();
});

routesInit(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
});