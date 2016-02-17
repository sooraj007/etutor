<?php
	class Chapter
	
	{
		
	 public function __construct()
	 
	 {
		 
		require 'idiorm.php';
		ORM::configure('mysql:host=localhost;dbname=etutor');
        ORM::configure('username', 'root');
        ORM::configure('password', 'pass');

		 
	}
		
	public function data()
	{
		$id = $_GET['id'];
		$name = ORM::for_table('name')->raw_query("SELECT  * FROM lessons x   JOIN  units y  on x.id = y.l_id WHERE y.l_id = ".$id)->find_many();
		 foreach($name as $names)
		 {
			$nam['units'][] = array('cname'=>$names->u_name, 'id'=>$names->id,'vpath'=>$names->v_url,'ipath'=>$names->v_image,"dur"=>$names->v_dur);  
			
		 }

		echo json_encode($nam);
	  	
	}
		
				
	}
	
	$serv = new Chapter();
	$serv->data();
