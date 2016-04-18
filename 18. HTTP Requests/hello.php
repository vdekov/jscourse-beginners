<?php
$name = 'async world';
if ( isset( $_REQUEST['name'] ) ) {
   $name = $_REQUEST['name'];
}
?>

<h1>Hello, <?= $name ?>!</h1>

<h2>GET params dump</h2>
<pre><?php var_dump( $_GET ); ?></pre>

<h2>POST params dump</h2>
<pre><?php var_dump( $_POST ); ?></pre>