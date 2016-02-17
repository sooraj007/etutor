<?php
$phar = new Phar('anggen.phar');
$phar->addFile('index.php');
$phar->buildFromDirectory('comp');

?>