const express = require('express');
const {clientsDb} = require('../utils/db')

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: clientsDb.getAll(),
        });
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