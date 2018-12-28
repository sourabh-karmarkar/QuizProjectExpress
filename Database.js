var mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/"
const dbs = db.db(QuizExpressDB);

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;

    let insertQuestion = insertDocuments(dbs, function () {
        client.close();
    });
    let fetchQuestion = fetchDocs(dbs, function () {
        client.close();
    });
});