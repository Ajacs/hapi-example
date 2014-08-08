var Hapi = require('hapi');
var Good = require('good');
var server = new Hapi.Server(4000);




server.route({
	method: 'GET',
	path: '/',
	handler: function(request,reply){
		reply('Hello World!');
	}
});


server.route({
	method: 'GET',
	path:'/users',
	handler: function(request,reply){
		reply('This is the users demo');
	},
	config:{
		description: 'Este metodo regresa una lista de usuarios con sus propiedades',
		notes: 'Se deben especificar los parametros esperados',
		tags:['users','endpoint']
	}
	});




server.pack.register(Good, function(err){
	if(err){
		throw err; //Something bad happened loading the plugin
	}
	server.start(function(){
	server.log('info','Server running at: ' + server.info.uri);
});
});

