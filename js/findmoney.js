// JavaScript Document

var update = function (){
window.location.href="bbtj_0.htm";
}

function toYear(str){
 var sd=str.split("/");
 return sd[0];
}
function toMonth(str){
 var sd=str.split("/");
 return sd[1];
}
var validate = function (){
   var myDate = new Date(); 	
   var xmlDoc=loadXMLDoc("2.xml");
   if(xmlDoc == "null")alert("null!");
    var o = document.body;
	var time1= document.getElementById("gettime"); 
	var num=0;
	var money=0;
	var num1=0;
	var money1=0;
	var num2=0;
	var money2=0;
	if(time1.value=="--选择时间--")
	 {
		 alert("没有选择完毕，请检查");
		 return;
	 }
	 var Finances = xmlDoc.getElementsByTagName("Finance");
	 for(var i=0;i<Finances.length;i++)
	 {
		var time=xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
		var income=xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
		var jine=xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
		var type=xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
		var t=toYear(time);
		if(t==time1.value)
		{
		    var m=toMonth(time);
			if(m>=1&&m<=4)
			{
			num++;
		    money+=parseInt(jine);
		    var div1 = document.createElement("div"); 
		    div1.style.background="#CCFFFF";
            div1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+m+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+income+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+jine;
		   o.appendChild(div1); 
			}
			}
			 
		}
	  var divnew = document.createElement("div"); 
			 divnew.innerHTML="<p>"+"以上第一季度收支情况-----------------------------------------------------------------------------共有"+num+"项"+"&nbsp&nbsp&nbsp"+"收支总金额为"+money+"</p>";
			o.appendChild(divnew);
			
	 for(var i=0;i<Finances.length;i++)
	 {
		var time=xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
		var income=xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
		var jine=xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
		var type=xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
		var t=toYear(time);
		if(t==time1.value)
		{
		    var m=toMonth(time);
			if(m>=5&&m<=8)
			{
			num1++;
		    money1+=parseInt(jine);
		  var div2 = document.createElement("div"); 
		   div2.style.background="#CCFFFF";
           div2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+m+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+income+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+jine;
		   o.appendChild(div2); 
			}
			}
			 
		}
	
	  var divnew2 = document.createElement("div"); 
	divnew2.innerHTML="<p>"+"以上为第二季度收支情况---------------------------------------------------------------------------共有"+num1+"项"+"&nbsp&nbsp&nbsp"+"收支总金额为"+money1+"</p>";
	
	o.appendChild(divnew2);
			
	 for(var i=0;i<Finances.length;i++)
	 {
		var time=xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
		var income=xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
		var jine=xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
		var type=xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
		var t=toYear(time);
		if(t==time1.value)
		{
		    var m=toMonth(time);
			if(m>=9&&m<=12)
			{
			num2++;
		    money2+=parseInt(jine);
		  var div3 = document.createElement("div"); 
		 div3.style.background="#CCFFFF";
            div3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+m+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+income+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+jine;
		   o.appendChild(div3); 
			}
			}
			 
		}
	
	  var divnew3 = document.createElement("div"); 
	divnew3.innerHTML="<p>"+"以上为第三季度收支情况---------------------------------------------------------------------------共有"+num2+"项"+"&nbsp&nbsp&nbsp"+"收支总金额为"+money2+"</p>"+"<p>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"制表于"+myDate.toLocaleString( )+"</p>";
	   o.appendChild(divnew3);
	
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


