<?php 
ini_set('display_errors', 1);
error_reporting(1);

require 'service/idiorm.php';
ORM::configure('mysql:host=localhost;dbname=etutor');
ORM::configure('username', 'root');
ORM::configure('password', 'pass');

$results = ORM::for_table('hcat')->raw_query('SELECT  hc.name ,hc.id, hn.hid , hn.hname , hn.hcon FROM hcat AS hc JOIN hname AS hn ON hn.hid = hc.id  WHERE hc.id = hn.hid ORDER BY  hn.hid ')->find_many();



?>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<script src="app/js/jquery.js"></script>

</head>
<body>
<div class ='container'>


	<?php 
    
    foreach($results as $res)
    {    
    	$b = $res->id;
    	
    	
    	 if($b !=  $c && $c !=null)
        {
        	echo "</div><hr><h1><u>$res->name</u></h1></hr><div class='row'>";
        }

        if($b == 1 && $c ==null )
        {
        echo "<h1><u>$res->name</u></h1> <div class='row'>";	
       
        }

        echo "<div class='col-md-4'>";
        
    	echo "<h2>".$res->hname."</h2>";
    	echo "<p>".$res->hcon."</p>";
    	
        echo "</div>";
        
    	
         $c = $res->id;
       

    }
   


	?>


	</div>
</body>
</html>




