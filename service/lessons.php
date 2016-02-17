<?php
	class Lessons
	
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
		$name = ORM::for_table('name')->raw_query("SELECT  * FROM course  x  INNER JOIN  lessons  y  on x.id = y.c_id WHERE y.c_id = ".$id)->find_many();
		 foreach($name as $names)
		 {
			$nam['lesson'][] = array('cname'=>$names->cname, 'clesson'=>$names->lesson_name,'id'=>$names->id,'thum'=>$names->c_thumb,'nov'=>$names->c_nv,'clevel'=>$names->c_level,'cid'=>$names->c_id,'vpath'=>$names->l_vpath,"dur"=>$names->l_dur);  
			
		 }

		echo json_encode($nam);
	  	
	}
		
				
	}
	
	$serv = new Lessons();
	$serv->data();
