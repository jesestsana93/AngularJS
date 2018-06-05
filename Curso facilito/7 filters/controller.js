angular.module("mainModule",[])
	.filter("removeHtml",function(){//quita etiquetas html
	//cadena com el nombre del filtro,funcion que va a evaluar
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FiltersController",function($scope){		
		$scope.mi_html={};
		$scope.mi_html.title="Hola";
		$scope.mi_html.body="Hola mundo";
		$scope.mi_html2="<p>Hello world sin etiquetas de HTML</p>";
		$scope.costo=2;
	});


