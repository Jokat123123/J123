const { ObjectId } = require('mongodb');
const { getDB } = require('../data/connection');

const { decrypt } = require('../utils/crypto');

async function getAllThreads(sort, statusSort) {
    const db = getDB();
    let threads = await db.collection('threads')
        .find().toArray();

    threads.forEach(thread => {
        if (thread.status) {
            try {
                thread.status = decrypt(thread.status);
            } catch (e) {}
        }
    });

    if (statusSort === 'positive') {
        threads.sort((a, b) => {
           
            if ((a.status || '').toLowerCase().includes('positive') && !(b.status || '').toLowerCase().includes('positive')) return -1;
            if (!(a.status || '').toLowerCase().includes('positive') && (b.status || '').toLowerCase().includes('positive')) return 1;
            return 0;
        });
    } else if (statusSort === 'negative') {
        threads.sort((a, b) => {
          
            if ((a.status || '').toLowerCase().includes('negative') && !(b.status || '').toLowerCase().includes('negative')) return -1;
            if (!(a.status || '').toLowerCase().includes('negative') && (b.status || '').toLowerCase().includes('negative')) return 1;
            return 0;
        });
    }

    
    if (sort === 'az') {
        threads.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (sort === 'za') {
        threads.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
    } else if (!statusSort) {
        
        threads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return threads;
}

async function getThreadById(id) {
    const db = getDB();
    const thread = await db.collection('threads')
        .findOne({_id: new ObjectId(id)});
    if (thread && thread.status) {
        try {
            thread.status = decrypt(thread.status);
        } catch (e) {
            
        }
    }
    return thread;
}

const { encrypt } = require('../utils/crypto');

async function addThread(title, content, status) {
    const db = getDB();
    const encryptedStatus = encrypt(status);
    await db.collection('threads')
    .insertOne({ title, content, status: encryptedStatus, createdAt: new Date()});
}

async function updateThread(id, title, content, status) {
    const db = getDB();
    await db.collection('threads').updateOne(
        { _id: new ObjectId(id)},
        { $set: { title, content, status}}
    );
}

async function deleteThread(id) {
    const db = getDB();
    await db.collection('threads').deleteOne( {_id: new ObjectId(id)});
}

module.exports = {getAllThreads, getThreadById, addThread, updateThread, deleteThread};