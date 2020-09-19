const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin_0:<password>@cluster0.uxtx7.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});