const { config } = require('dotenv')
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const mongodb = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();
app.use(express.json());
const port = process.env.PORT || 3000;



app.get('/', function(req, res){
    res.send(
        "Hello World!"
    );
});

app.get('/foo', function(req, res){
    res.send({
        "foo": "bar"
    });
});

var data;

app.post('/test', function(req, res){
    data = req.body;
    console.log('Got body:', data);
    res.send(data);
});

app.get('/test', function(req, res){
    console.log(data);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

