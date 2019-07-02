// JavaScript Document
// JavaScript Document
var update = function (){
window.location.href="bbtj.htm";
}




function toDate(str){
 var sd=str.split("/");
 return sd[0];
}




var validate = function (){
	var myDate = new Date(); 	
   var xmlDoc=loadXMLDoc("2.xml");
   if(xmlDoc == "null")alert("null!");
    var o = document.body;
	var time1 = document.getElementById("time1");
	var time2 = document.getElementById("time2"); 
	var num=0;
	var money=0;
	var num1=0;
	var money1=0;
	if(time1.value=="--选择时间--"||time2.value=="--选择时间--")
	 {
		 alert("没有选择完毕，请检查");
		 return;
	 }
	 else if(time1.value>=time2.value)
	  { 
	     alert("开始日期大于结束时间，请检查");
		 return;
	  }
	 var Finances = xmlDoc.getElementsByTagName("Finance");
	 for(var i=0;i<Finances.length;i++)
	 {
		var time=xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
		var income=xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
		var t=toDate(time);
		 if(t>=time1.value&&t<=time2.value)
		{
			if(income=="C")
			{
		    num++;
		    money+=parseInt(xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue);
		   var div1 = document.createElement("div"); 
		   div1.style.background="#CCFFFF";
           div1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
		   o.appendChild(div1); 
		  
			}
			 
		}
	 }
	 var divnew = document.createElement("div"); 
			 divnew.innerHTML="<p>"+"以上为支出项目C---------------------------------------------------------------------------------共有"+num+"项"+"&nbsp&nbsp&nbsp"+"支出总金额为"+money+"</p>";
			o.appendChild(divnew);
			
			
	  for(var i=0;i<Finances.length;i++)
	 {
		var time=xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
		var income=xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
		var t=toDate(time); ; 
		 if(t>=time1.value&&t<=time2.value)
		{
			if(income=="R")
			{
			num1++;
		    money1+=parseInt(xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue);
			var div2 = document.createElement("div"); 
			div2.style.background="#CCFFFF";
          div2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
		  o.appendChild(div2);
			} 
			flag=true;
		}
		
	  }
	  var divnew2 = document.createElement("div"); 
	divnew2.innerHTML="<p>"+"以上为收入项目R---------------------------------------------------------------------------------共有"+num1+"项"+"&nbsp&nbsp&nbsp"+"收入总金额为"+money1+"</p>"+"<p>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"制表于"+myDate.toLocaleString( )+"</p>";
	
	o.appendChild(divnew2);
	
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


