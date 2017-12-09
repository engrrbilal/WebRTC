var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
console.log('server started');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.listen(port,() =>{
	console.log("Server is up!")
});
