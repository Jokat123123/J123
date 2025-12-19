const { getDB } = require('../data/connection');

async function getAllBlanks() {
    const db = getDB();
    return await db.collection('blanks').find().sort({ date: 1 }).toArray();
}

async function addBlank(img, description, date) {
    const db = getDB();
    await db.collection('blanks').insertOne({ img, description, date: new Date(date) });
}

module.exports = { getAllBlanks, addBlank };
