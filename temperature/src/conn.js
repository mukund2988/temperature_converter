import { MongoClient } from "mongodb";

const uri ="mongodb+srv://mukund7521:mukund2988@cluster0.fvc1m7s.mongodb.net/";
const client = new MongoClient(uri);
const database = client.db("temp");
const coll = database.collection("data"); 

async function run() {
  try {
    await client.connect();
    console.log('Done');
  } catch (err) {
    console.log(err.stack);
  }
}

run().catch(console.dir);

export { coll };  