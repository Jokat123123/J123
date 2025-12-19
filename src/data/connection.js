const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = await client.db('fpage');
        console.log('Polaczona z Mongodb');
    } catch (err) {
        console.error('Blad polaczenia z MongoDB: ', error);
    }
}
function getDB() {
    if (!db) throw new Error('Baza danych nie jest polaczona')
        return db;
}
module.exports = { connectDB, getDB};