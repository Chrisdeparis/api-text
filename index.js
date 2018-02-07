const express = require('express')
const app = express()
var http = require('http')
var jwt = require('jsonwebtoken')

app.post('/api/login', function(req, res){
    // auth user
    const user = { id:3};
    const token = jwt.sign({ user }, 'my_secret_key');
    res.json({
        token: token
    });
})

app.post('/api/token', function(req, res){
    res.json({
        "email": "foo@bar.com"
    })
})

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type":"text/plain"});

})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/login', function (req, res) {
    res.send('Hello World! login')
  })

app.get('/api', function (req, res) {
    res.send('api');
});

app.get('/api/justify', ensureToken, function (req, res) {
    jwt.verify(req.token, 'my_secret_key', function(err, data) {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'api / protected',
                data: data
            }); 
        }
    })
    
});

function ensureToken(req, res, next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})