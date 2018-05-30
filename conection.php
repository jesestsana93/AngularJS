<?php
// Opciones: puerto ?,user , password , nombre de la base de datos
	$connect = mysqli_connect("localhost", "root", "", "CRUD");
	$result = mysqli_query($connect , "select * from Personal");
	$data = array ();
	while ($row = mysqli_fetch_array($result)) {
		$data [] = $row;
	}
 	print json_encode($data);
?>