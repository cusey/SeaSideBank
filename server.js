const express = require('express');
const app = express();

const http = require('http');
const path = require('path');


// URL : http://localhost:3000/api/get_events

app.get('/api/get_events', function(req, res){

    var sql = require('mssql');

    var config = {
        user : 'sa',
        password : 'password',
        server :'localhost',
        database : 'tspweb'
    };

    sql.connect(config, function(err) {

        var request = new sql.Request();

        request.query('select * from tspweb_prod.events', function(err, recordset){

        if (err) console.log(err);

        res.send(  JSON.stringify( recordset )  );

        });

    });


});

app.use( express.static(__dirname + 'dist/tspweb'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app)

app.listen(3000, function(){
    console.log('Sever is now running....');
})