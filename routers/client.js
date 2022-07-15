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
        res.render('client/single', {
            client: clientsDb.getOne(req.params.id),
        });
    })
    .post('/', (req, res) => {
        res.send('Dodaj użytkownika!');
    })
    .put('/:id', (req, res) => {
        res.send('Zmodyfikuj użytkownika!');
    })
    .delete('/:id', (req, res) => {
        clientsDb.delete(req.params.id);
        res.render('client/deleted');
    })

module.exports = {
    clientRouter,
};