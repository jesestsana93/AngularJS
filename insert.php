<?php
	$data = json_decode (file_get_contents ("php: // input"));
	$id = mysql_real_escape_string ( $data- >id);
	$nombre = mysql_real_escape_string ($data- > nombre);
	$apellido = mysql_real_escape_string ($data- > apellido);
	$correo = mysql_real_escape_string ($data- > correo);
	$puesto = mysql_real_escape_string ($data- > puesto);
	mysql_connect ("localhost ", " root ", ""); mysql_select_db (" CRUD ");
 	mysql_query ("INSERT INTO Personal (`id `, `nombre `, `apellidos `,`correo `, `puesto `) VALUES ('". $id. " ','". $nombre. " ','".$apellido. " ','". $correo. " ','". $puesto. " ')");
?>