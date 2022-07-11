const express = require('express');

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.send('Pobierz wszystkich użytkowników!');
    })
    .get('/:id', (req, res) => {
        res.send('Pobierz pojedyńczdego użytkownika!');
    })
    .post('/', (req, res) => {
        res.send('Dodaj użytkownika!');
    })
    .put('/:id', (req, res) => {
        res.send('Zmodyfikuj użytkownika!');
    })
    .delete('/:id', (req, res) => {
        res.send('Usuń użytkownika!');
    })

module.exports = {
    clientRouter,
};