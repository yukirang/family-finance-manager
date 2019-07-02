<?php

$id=$_GET["id"];

$myfile = '2.xml';
$myfile = realpath($myfile);
$doc = new DOMDocument('1.0');
$doc->load($myfile);
$temp = $doc->getElementsByTagName("Finance");
// Let's just add a couple of elements for good measure

for ($i=0;$i<$temp->length;$i++){
     if($doc->getElementsByTagName("id")->item($i)->childNodes->item(0)->nodeValue==$id)
	 {
	 	$doc->documentElement->removeChild($temp->item($i));
	  }
}
$doc->save($myfile); 


?>


