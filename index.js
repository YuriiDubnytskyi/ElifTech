const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const ServerPort = require('./client/models/ServerPort');
const ServerPortRouter = require('./client/routes/ServerPortRouter');
mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});
var cors = require('cors')

app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/serverport', ServerPortRouter);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
const jsonParser = express.json();
app.post('/add',function (req, res) {

  const serverport = new ServerPort(req.body);
  
  console.log(req)
  serverport.save()
    .then(serverport => {
        res.json("aded item");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


app.delete("/delete/:id", function(req, res){
    console.log(req.body)
    const id = req.params.id;
    ServerPort.findByIdAndDelete(id, function(err, user){
                
        if(err) return console.log(err);
        res.send(user);
    });
});

app.put("/save/:id", jsonParser, function(req, res){
    const id = req.params.id;
    console.log('here here--------'+id)
    console.log('here data-------'+req.body)

    ServerPort.findByIdAndUpdate( id, req.body,{new: true}, function(err, user){
        if(err) return console.log(err); 
        res.send(user);
    });
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
