class ClientRecord {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.nextContactAt= obj.nextContactAt;
        this.notes = obj.notes;
    }
}

module.exports = {
  ClientRecord,
};