<?php

$id0 = $_GET["id0"];
$financetype = $_GET["financetype"];
$type=$_GET["type"];
$time=$_GET["time"];
$num=$_GET["num"];
$userid=$_GET["userid"];

$myfile = '2.xml';
$myfile = realpath($myfile);
$doc = new DOMDocument('1.0');
$doc->load($myfile);

// Let's just add a couple of elements for good measure
$root = $doc->documentElement;


$finance = $doc->createElement('Finance');

$id = $doc->createElement('id');
$text = $doc->createTextNode($id0);
$text = $id->appendChild($text);
$finance->appendChild($id);

$ftp = $doc->createElement('financetype');
$text = $doc->createTextNode($financetype);
$text = $ftp->appendChild($text);
$finance->appendChild($ftp);

$tp = $doc->createElement('type');
$text = $doc->createTextNode($type);
$text = $tp->appendChild($text);
$finance->appendChild($tp);

$tm = $doc->createElement('spendingtime');
$text = $doc->createTextNode($time);
$text = $tm->appendChild($text);
$finance->appendChild($tm);

$number = $doc->createElement('num');
$text = $doc->createTextNode($num);
$text = $number->appendChild($text);
$finance->appendChild($number);

$ui = $doc->createElement('userid');
$text = $doc->createTextNode($userid);
$text = $ui->appendChild($text);
$finance->appendChild($ui);


$root->appendChild($finance);

$doc->save($myfile); 


?>


