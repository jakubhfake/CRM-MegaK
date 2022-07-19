class ClientRecord {
    constructor(obj) {
        const {id, name, email, nextContactAt, notes} = obj;

        if (!id || typeof id !== 'string') {
            throw new Error('ID musi być niepustym tekstem.');
        }

        if(!name || typeof name !== 'string' || name.length <= 2 ) {
            throw new Error('Imię musi być tekstem o długości min. 3 znaków');
        }

        if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
            throw new Error('E-mail nieprawidłowy');
        }

        if (typeof nextContactAt !== 'string') {
            throw new Error('Data następnego kontaktu jest nieprawidłowa, musi być tekstem')
        }

        if (typeof notes !== 'string') {
            throw new Error('Notatki są nieprawidłowe, muszą być tekstem')
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.nextContactAt= nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
  ClientRecord,
};