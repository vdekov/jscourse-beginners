<?php

header('Access-Control-Allow-Origin: *');

if ( move_uploaded_file( $_FILES['file']['tmp_name'], './files/' . $_FILES['file']['name'] ) ) {
   echo "<h1>File successfully uploaded</h1>";
} else {
   echo "<h1 style=\"color:red\">Error uploading the file!</h1>";
}