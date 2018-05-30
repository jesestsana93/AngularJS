var app = angular.module (" Base " ,[]);
 app.controller (" baseDatos ",function ($scope , $http ){

 });	

/*
 * Funcion para obtener todos los elementos de la base de
datos con ayuda del archivo conection.php
 */
$http.get("conection.php").success(function(data){
	$scope.data = data;
})
.error(function() {
	$scope.data = " Error al leer los elementos ";
});

/*
 * Funcion para agregar un elemento a la base de datos con
ayuda del archivo insert.php
 */
$scope.insertData=function (){
 	$http.post("insert.php " ,{'id ': $scope.id ,'nombre ':
		$scope.nombre ,'apellido ': $scope.apellido ,'correo ':
		$scope.correo ,'puesto ': $scope.puesto 
	})
 	.success(function (data ,status , headers , config){
		console.log ("se inserto correctamente ");
 		setTimeout(location.reload.bind (location), 300) ;
 	});
}
/*
 * Funcion para actualizar un elemento de la base de datos
 */
$scope.updateData=function (id ,nombre , apellidos ,correo , puesto ){
	$http.post ("update.php " ,{'id ': $scope.id ,'nombre ': $scope.nombre ,'apellidos ': 
		$scope.apellidos ,'correo ': $scope.correo ,'puesto ': $scope.puesto
	})
	.success (function (data ,status , headers , config){
		console.log ("Se actualizo correctamente ");
		setTimeout (location.reload.bind (location), 300) ;
	});
}