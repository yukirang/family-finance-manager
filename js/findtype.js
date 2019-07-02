// JavaScript Document
var update = function (){
window.location.href="cxgn_type.htm";
}
var validate = function (){
	 	
    var xmlDoc=loadXMLDoc("2.xml");
	var o = document.body; 
	 var flag = false;
	var type = document.getElementById("selecttype");
	if(xmlDoc == "null")alert("null!");
	var Finances = xmlDoc.getElementsByTagName("Finance");	
	console.log(type.value);
	for(var i=0;i<Finances.length;i++){
		var TYPE=xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
		if(TYPE==type.value){
			var div = document.createElement("div"); 
			div.style.background="#CCFFFF";
            div.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("userid")[i].childNodes[0].nodeValue;
	       o.appendChild(div);  
		flag=true;
		}
	}
	if(flag==false) alert("没有查询到任何结果！");
	

}



function loadXMLDoc(dname) 
{
try //Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
    xmlDoc=document.implementation.createDocument("","",null);
    }
  catch(e) {alert(e.message)}
  }
try 
  {
  xmlDoc.async=false;
  xmlDoc.load(dname);
  return(xmlDoc);
  }
catch(e) {alert(e.message)}
return(null);
}


