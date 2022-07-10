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
    db.update( 'ad729d59-a067-44a6-99f2-0d37b73f293d',
        { name: '1234'},
        );
    console.log('Client data are update :)');
    res.send('Client data are update :)');
})


app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})