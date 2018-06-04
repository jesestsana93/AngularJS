angular.module("MyFirstApp",[]) 
	.controller("FirstController", ["$scope", function(m){
	m.nombre = "Jesus"; 
	//m.nuevoComentario = {comentario:"Hola mundo"};
	m.nuevoComentario = {};
	m.comentarios=[
		{
			comentario:"Buen tutorial",
			username:"codigofacilito"
		},
		{
			comentario:"Mal tutorial",
			username:"otro_usuario"
		},
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	}
}]);

//Dependency injection: Las dependencias que uno creo como services o factories o las que ya existen en Angular se 
//pueden incrustar en los controladores o modulos. Esto se hace a traves del nombre de las variables

