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
	if(time1.value=="--ѡ��ʱ��--"||time2.value=="--ѡ��ʱ��--")
	 {
		 alert("û��ѡ����ϣ�����");
		 return;
	 }
	 else if(time1.value>=time2.value)
	  { 
	     alert("��ʼ���ڴ��ڽ���ʱ�䣬����");
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
			 divnew.innerHTML="<p>"+"����Ϊ֧����ĿC---------------------------------------------------------------------------------����"+num+"��"+"&nbsp&nbsp&nbsp"+"֧���ܽ��Ϊ"+money+"</p>";
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
	divnew2.innerHTML="<p>"+"����Ϊ������ĿR---------------------------------------------------------------------------------����"+num1+"��"+"&nbsp&nbsp&nbsp"+"�����ܽ��Ϊ"+money1+"</p>"+"<p>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"�Ʊ���"+myDate.toLocaleString( )+"</p>";
	
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


