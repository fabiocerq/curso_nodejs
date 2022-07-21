const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/testmongodb2" //porta padrão do mongo

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect
        console.log("Conectando ao MongoDB")
    } catch (error) {
        console.log(err)
    }
}

run()

module.exports = client