<?php
$id = $_GET["id"];
$financetype = $_GET["financetype"];
$type=$_GET["type"];
$time=$_GET["time"];
$num=$_GET["num"];
$userid=$_GET["userid"];


$myfile = '2.xml';
$myfile = realpath($myfile);
$doc = new DOMDocument('1.0');
$doc->load($myfile);
$temp = $doc->getElementsByTagName("Finance");
// Let's just add a couple of elements for good measure
for ($i=0;$i<$temp->length;$i++){
     $mod = $doc->getElementsByTagName("id")->item($i);
     if($mod->childNodes->item(0)->nodeValue == $id)
	 {
	 	$doc->getElementsByTagName("financetype")->item($i)->childNodes->item(0)->nodeValue = $financetype;
		$doc->getElementsByTagName("type")->item($i)->childNodes->item(0)->nodeValue = $type;
		$doc->getElementsByTagName("spendingtime")->item($i)->childNodes->item(0)->nodeValue = $time;
		$doc->getElementsByTagName("num")->item($i)->childNodes->item(0)->nodeValue = $num;
		$doc->getElementsByTagName("userid")->item($i)->childNodes->item(0)->nodeValue = $userid;
		break;
	 }
}


$doc->save($myfile); 


?>


