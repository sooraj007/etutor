<?php
	class Service
	
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
		/* $name = ORM::for_table('name')->raw_query("SELECT  * FROM course  x  INNER JOIN  lessons  y  on x.id = y.c_id WHERE x.id = y.c_id ORDER BY  y.c_id ")->find_many();
		 foreach($name as $names)
		 {
			$nam['course'][] = array('cname'=>$names->cname, 'clesson'=>$names->lesson_name,'id'=>$names->id,'thum'=>$names->c_thumb,'nov'=>$names->c_nv,'clevel'=>$names->c_level,'cid'=>$names->c_id,'vpath'=>$names->l_vpath,"dur"=>$names->l_dur);  
			
		 }*/

		 $name = ORM::for_table('course')->find_many();
		 foreach($name as $names)
		 {
		 		$nam['course'][] =  array('cname'=>$names->cname,'thum'=>$names->c_thumb,'id'=>$names->id);
		 }
		echo json_encode($nam);
	  	
	}
		
				
	}
	
	$serv = new Service();
	$serv->data();
