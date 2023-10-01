import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import { coll } from "./conn.js";


const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const publicPath = path.join(path.dirname(currentModulePath), '../public');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))
app.get('/', async function (req, res,next) {
  res.sendFile(`${publicPath}/index.html`);
  next();
});




app.post('/', async (req, res, next) => {
  try {
    await coll.insertMany([req.body]);
    res.json({ status: "success" })
  }
  catch (e) { console.log(e); }
  next(getData())

});
const getData = async()=>{
  try {
    console.log('tring');
    const d = await coll.find().toArray();
    console.log(d);
    
  }
  catch (e) { console.log(e); }
}


app.listen(3000, () => {
  console.log("Listening on port: http://localhost:3000/");

});

