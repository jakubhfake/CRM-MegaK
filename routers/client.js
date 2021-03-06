const express = require('express');
const {ClientRecord} = require("../recored/client-record");
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

        res.render('client/added', {
            name: req.body.name,
            id,
        });
    })
    .put('/:id', (req, res) => {
        clientsDb.update(req.params.id, req.body);
        res.render('client/modified', {
            name: req.body.name,
            id: req.params.id,
        });
    })
    .delete('/:id', (req, res) => {
        clientsDb.delete(req.params.id);
        res.render('client/deleted');
    })
    .get('/form/add', (req, res) => {
        res.render('client/forms/add');
    })
    .get('/form/edit/:id', (req, res) => {
        res.render('client/forms/edit', {
            client: clientsDb.getOne(req.params.id),
        });
    })

module.exports = {
    clientRouter,
};