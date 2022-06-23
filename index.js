const express = require('express');
const {engine} = require('express-handlebars');

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

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})