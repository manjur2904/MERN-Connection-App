const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// start mongoDB using 'mongod' command in terminal
// 1. connect database with the actual server
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/user');
    console.log('db connected');
}
// 2. create a schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
// 3. give an identity to the schema
const User = mongoose.model('User', userSchema);

const server = express();

// to switch between server, allow cors
server.use(cors());
server.use(bodyParser.json());

// CRUD - Create(post)
server.post('/user', async(req, res)=>{
    // with out using bodyParser, it will print undefined
    console.log(req.body);

    // save data in the database
    let user = new User();  // create a object
    user.username = req.body.username; // add data to the object
    user.password = req.body.password;
    const doc = await user.save(); // save the data in databse, it saves as document
    console.log(doc);

    res.json(doc);
})

// CRUD - Read(get)
server.get('/user', async(req, res)=>{

    // query the data from databse
    const docs = await User.find({}); // more than one document
    res.json(docs);
})

server.listen(8000, ()=>{
    console.log('server started');
})