angular.module("mainModule",[])
	.filter("removeHtml",function(){//quita etiquetas html
	//cadena com el nombre del filtro,funcion que va a evaluar
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FiltersController",function($scope){
		$scope.mi_html="<p>Hola mundo</p>";
		$scope.mi_html={};
		$scope.mi_html.title="Hola";
		$scope.mi_html.body="Hola mundo";
		$scope.costo=2;
	});


