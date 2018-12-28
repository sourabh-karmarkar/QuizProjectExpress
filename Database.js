var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function getConnection(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Coonnnn")
        let dbs = db.db('QuizExpressDB');
        callback(dbs, db);
    });
}

const fetchDocs = (subject,callback) => {
    getConnection((db, con) => {
        const collection = db.collection('Quiz');
        collection.aggregate([{ $match: { sub: subject } }, { $sample: { size: 3 } }]).toArray((err, result) => {
            if (err) throw err;
            callback(result);
            con.close();
        })
    });
}
module.exports = { fetchDocs };
