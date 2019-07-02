<?php
$userName = $_GET["user"];
$pw=$_GET["pass"];

$myfile = '1.xml';
$myfile = realpath($myfile);
$doc = new DOMDocument('1.0');
$doc->load($myfile);

// Let's just add a couple of elements for good measure
$root = $doc->documentElement;

$user = $doc->createElement('user');
$name = $doc->createElement('name');
$text = $doc->createTextNode($userName);
$text = $name->appendChild($text);
$user->appendChild($name);
$pass = $doc->createElement('pass');
$text = $doc->createTextNode($pw);
$text = $pass->appendChild($text);
$user->appendChild($pass);

$root->appendChild($user);

$doc->save($myfile);

?>

