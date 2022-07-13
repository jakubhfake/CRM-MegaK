const express = require('express');
const {homeRouter} = require("./routers/home");
const {clientRouter} = require("./routers/client");
const {engine} = require('express-handlebars');
const {clientsDb} = require('./utils/db');

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
    res.send(clientsDb.getOne('ad729d59-a067-44a6-99f2-0d37b73f293d').name);
})


app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})