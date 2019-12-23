var express = require('express');
var app = express();

// URL : http://localhost:4000/api/get_accounts

app.get('/api/get_accounts', function(req, res){

    var sql = require('mssql');

    var config = {
        user : 'sa',
        password : 'password',
        server :'localhost',
        database : 'SeaSideBank'
    };

    sql.connect(config, function(err) {

        var request = new sql.Request();

        request.query('select * from dbo.account', function(err, recordset){

        if (err) console.log(err);

        res.send( recordset.recordset );

        });

    });


});

var server = app.listen(4000, function(){
    console.log('Sever is now running....');
})