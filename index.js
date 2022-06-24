const express = require('express');
const {homeRouter} = require("./views/routers/home");
const {clientRouter} = require("./views/routers/client");
const {engine} = require('express-handlebars');
const {db} = require('./utils/db');

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);
app.get('/test', (req, res) => {
    db.create({
        name: 'test1234',
        mail: 'db@db.db',
    })
    console.log('New client added :)');
    res.send('It works! New client added :)')
})

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})