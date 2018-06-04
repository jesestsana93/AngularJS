<?php
	$data = json_decode (file_get_contents (" php: // input "));
	$id = mysql_real_escape_string ($data- >id);
	$nombre = mysql_real_escape_string ($data- > nombre);
	$apellidos = mysql_real_escape_string ($data- > apellidos);
	$correo = mysql_real_escape_string ($data- > correo);
	$puesto = mysql_real_escape_string ($data- > puesto);
	$con = mysql_connect (" localhost ", " root ", "");
	mysql_select_db ("CRUD", $con );
	mysql_query (" UPDATE Personal set id = '". $id. " ', nombre = '".
	$nombre. " ', apellidos = '". $apellidos. " ', correo = '".
	$correo. " ', puesto = '". $puesto. "' WHERE correo = '".
	$correo. "'");
	mysql_close ($con);
?>