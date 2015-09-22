/// <reference path="../../typings/tsd.d.ts" />
var express = require('express');
var viewRenderingEngine = require('ejs-mate');
var app = express();
app.engine('ejs', viewRenderingEngine);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/api/coolresource', function (req, res) {
    res.send({
        "isApiWorking": true
    });
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
//# sourceMappingURL=server.js.map