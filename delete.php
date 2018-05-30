<?php
	$data = json_decode(file_get_contents (" php: // input "));
	$correo = mysql_real_escape_string ($data- > correo );
	$con = mysql_connect(" localhost ", " root ", "");
	mysql_select_db(" CRUD ", $con );
	mysql_query(" DELETE FROM Personal WHERE correo = '". $correo. "'", $con);
	mysql_query(" commit ");
	mysql_close($con);
?>