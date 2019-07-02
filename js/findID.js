// JavaScript Document
var valid = function (){	
    var xmlDoc=loadXMLDoc("2.xml");
	var o = document.body; 
    var flag = false;
	var UserID = document.getElementById("textid");
	if(xmlDoc == "null")alert("null!");
	if(UserID.value==""){
        alert("请输入成员ID");
        ID.focus();
        return;
    }
	var Finances = xmlDoc.getElementsByTagName("Finance");	
	console.log(UserID.value);
	for(var i=0;i<Finances.length;i++){
		var IDnumber=xmlDoc.getElementsByTagName("userid")[i].childNodes[0].nodeValue;
		if(IDnumber==UserID.value){
			var div = document.createElement("div"); 
			div.style.background="#CCFFFF";
             div.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+IDnumber;
	       o.appendChild(div);  
			flag = true;
		}
	}
	if(flag==false)alert("没有查询到任何结果！");
}
var update = function (){

window.location.href="cxgn_id.htm"; 

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


