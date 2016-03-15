var express=require('express'),	
	app=express(),
	mongoose=require('mongoose');
	bodyParser=require('body-parser'),
	SnoteController=require('./server/serverController/SnoteController');

	mongoose.connect('mongodb://localhost:27017/notes');


	app.use(bodyParser());

	app.get('/',function(req,res){
		res.sendFile(__dirname + '/client/views/index.html');

	});

	app.get('/api/notes',SnoteController.getNotes);

	app.post('/api/notes',SnoteController.create);

	app.use('/js', express.static(__dirname + '/client/js'));

	app.listen(3000,function(){
		console.log('Server is on for request...');
	})