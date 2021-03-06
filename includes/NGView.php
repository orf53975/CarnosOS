<?php
namespace ArcherSys\AngularJS;
use ArcherSys\Viewer\Contrib\View;
interface Browsable{
	 function head(callable $onDefine,$title);
	function body($controller,$location,$appName,callable $onCreate);
	function __construct($title,$appName,$location,$controller,callable $onDefine, callable $onCreate);
}
class NGView implements Browsable{
	public $title;
	function __construct($title,$appName,$controller,callable $onDefine,callable $onCreate){
		echo "<!DOCTYPE HTML>";
	
			echo "<html>";
	
		
	    $this->head($onDefine,$title);
	   
	    
	    	$this->body($controller,$location,$appName,$onCreate);
	    	
	    
	    echo "</html>";
	}
	
	 function head(callable $onDefine, $title){
		echo "<head>";
		echo "<title>".$title."</title>";
		$onDefine();
		echo "</head>";
	}
	
	 function body($controller,$appName,callable $onCreate){
	
	 				echo "<body ng-app='${appName}'>";
	 echo "<div ng-controller='${controller}'>";
	 	

		$onCreate();
	 echo "</div>";
		echo "</body>";
	}
	
}
?>