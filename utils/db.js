const {readFile, writeFile} = require('fs').promises;
const {join} = require('path');

class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data',dbFileName);
        console.log(this.dbFileName);
    }
}

const db = new Db('client.json');