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
        const id = clientsDb.create(req.body);
        
        console.log(req.body);
        console.log('Id nowego klienta', id)

        res.render('client/added', {
            name: req.body.name,
            id,
        });
    })
    .put('/:id', (req, res) => {
        res.send('Zmodyfikuj użytkownika!');
    })
    .delete('/:id', (req, res) => {
        clientsDb.delete(req.params.id);
        res.render('client/deleted');
    })
    .get('/form/add', (req, res) => {
        res.render('client/forms/add');
    })

module.exports = {
    clientRouter,
};