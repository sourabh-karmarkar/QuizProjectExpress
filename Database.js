var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function getConnection(callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        let dbs = db.db('QuizExpressDB');
        callback(dbs, db);
    });
}

const fetchDocs = (subject, callback) => {
    getConnection((db, con) => {
        const collection = db.collection('Quiz');
        collection.aggregate([{ $match: { quiz_subject: subject } }, { $sample: { size: 3 } }]).toArray((err, result) => {
            if (err) throw err;
            callback(result);
            con.close();
        })
    });
}

const getSubject = (callback) => {
    getConnection((db, con) => {
        const collection = db.collection('Quiz');
        collection.distinct("quiz_subject", (err, result) => {
            if (err) throw err;
            callback(result);
            con.close();
        })
    });
}

const insertUser = (obj,callback) => {
    getConnection((db, con) => {
        const collection = db.collection('Users');
        collection.insertOne(obj,(err, result) => {
            if (err) throw err;
            callback(result);
            con.close();
        })
    });
};

module.exports = { fetchDocs, getSubject, insertUser };
