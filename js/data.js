// JavaScript Data Document

// JavaScript Document

var MM_preloadImages = function () { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
 
var xmlHttp;
var o;
var loadXML = function(xmlString){ //����xmldoc����
    
	if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
	
    else
    {// code for IE6, IE5
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
       xmlhttp.open("GET",xmlString,false);
	   xmlhttp.setRequestHeader('If-Modified-Since', '0');
       xmlhttp.send(null);
       xmlDoc=xmlhttp.responseXML;
	   return xmlDoc;
}

var getXmlHttpObject = function(){ //����xmldoc����
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 // Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}

	
	
var validate = function (){	
    var xmlDoc=loadXML("1.xml");
    var flag = false;
	var user = document.getElementById("inp_name");
    var pass = document.getElementById("inp_pass");

	if(xmlDoc == "null")alert("null!");
	
	if(user.value==""){
        alert("�û�������Ϊ��.");
        username.focus();
        return;
    }
    if(pass.value==""){
        alert("���벻��Ϊ��.")
        return;
    }
	var userlist = xmlDoc.getElementsByTagName("user");
	
	console.log(user.value);
	for(var i=0;i<userlist.length;i++){
		if(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue==user.value && xmlDoc.getElementsByTagName("pass")[i].childNodes[0].           nodeValue==pass.value){
			window.location.href = 'anim.html';
			flag = true;
			break;
		}
	}
	if(flag==false)alert("�û������������");
}

var register = function (){	
	var user = document.getElementById("reg_name").value;
    var pass = document.getElementById("reg_pass").value;
	var again = document.getElementById("reg_again").value;
    var xmlDoc=loadXML("1.xml");
	if(xmlDoc == "null")alert("null!");
	var userlist = xmlDoc.getElementsByTagName("user");
	
	if(user==""){
        alert("�������û���");
        user.focus();
        return;
    }
    if(pass==""){
        alert("����������");
		pass.focus();
        return;
    }
	if(pass.length<6){
		alert("���볤�Ȳ���С��6λ");
		return;
	}
	if(again==""){
		alert("��ȷ������");
		again.focus();
		return;
	}
	if(pass!=again){
		alert("���벻һ��");
		return;
	}
	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("�������֧��http����");
		return;
	}	
	var result = confirm("ȷ��ע�᣿");
	
	if(result){
	for(var i=0;i<userlist.length;i++){
		if(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue==user){
			alert("�û����Ѵ���");
			return;
		}
	}
	var url = "test.php";
	url=url+"?user="+user+"&pass="+pass;
	url=url+"&sid"+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);//��������Ĳ��� 
	xmlHttp.send(null);//�������� 
	alert("ע��ɹ�");
	location.href = "Index.html";
    }
	
}


var add_finance = function (){	
    show('hide0');
	hide('hide1');
    var financetype = document.getElementById("financetype").value;
	var type = document.getElementById("type").value;
	var time = document.getElementById("time").value;
	var id0 = document.getElementById("id0").value
	var num = document.getElementById("num").value;
    var userid = document.getElementById("userid").value;
    var xmlDoc=loadXML("2.xml");
	var flag=true;
	if(financetype==""){
        alert("��ѡ������/֧��");
        return;
    }
    if(type==""){
        alert("��ѡ����֧����");
        return;
    }
	if(time==""){
		alert("��������֧����");
		time.focus();
		return;
	}
	if(!(Date.parse(time))||time.length!=10){
		alert("��������Ч����֧����");
		time.focus();
		return;
	}
	if(id0==""){
        alert("��������");
        return;
    }
	if(num==""){
        alert("��������");
        return;
    }
    if(userid==""){
        alert("�������ԱID");
        return;
    }
	var list = xmlDoc.getElementsByTagName("id");
	
	for(var i=0;i<list.length;i++){
		if(list[i].childNodes[0].nodeValue==id0){
			flag = false;
			console.log(id0);
			alert("����Ѵ���");
			break;
		}
	}

	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("�������֧��http����");
		return;
	}	
	var result = false;
	if(flag){
	    result = confirm("ȷ����ӣ�");
	}
	
	if(result&&flag){
	     var temp = document.body; 
		 o = temp;
        
		 div = document.createElement("div"); 
		 cb = document.createElement("input");
		 div.appendChild(cb);
		 cb.type = 'checkbox';
		 cb.name= "checkbox";
		 cb.id=id0;
		 div.style = "background-color:#CCFFFF";
		 div.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+id0+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+financetype+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+time+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+num+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+userid;
	       o.appendChild(div);  
		   var url = "add_finance.php";
     url=url+"?id0="+id0+"&financetype="+financetype+"&type="+type+"&time="+time+"&num="+num+"&userid="+userid;
	//url=url+"?id="+id+"&financetype="+financetype+"&type="+type+"&time="+time+"&num="+num+"&userid="+userid;
	url=url+"&sid"+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);//��������Ĳ��� 
	xmlHttp.send(null);//�������� 
    }
}

var showList = function(){
	var xmlDoc = loadXML("2.xml");
	var o = document.body;
	var Finances = xmlDoc.getElementsByTagName("Finance");
	var count=Finances.length+1;
	for(var i=0;i<count-1;i++){
		 var div = document.createElement("div"); 
		 var cb = document.createElement("input");
		 div.appendChild(cb);
		 cb.type = 'checkbox';
	     cb.name="checkbox";
		 cb.id=xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
		  div.style = "background-color:#CCFFFF";
         div.innerHTML +="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("userid")[i].childNodes[0].nodeValue;
	       o.appendChild(div);  
		}
}


var rem = function(){
var result = confirm("ȷ��ɾ��ѡ���");
if(result){
	var ch =this.document.getElementsByName("checkbox");
	console.log(ch.length);
	for(var i = 0; i < ch.length; i++){
		if(ch[i].checked){
			  xmlHttp=getXmlHttpObject();
			  var url = "rem_finance.php";
	          url=url+"?id="+ch[i].id;
	          url=url+"&sid"+Math.random();
	          xmlHttp.onreadystatechange=stateChanged;
	          xmlHttp.open("GET",url,true);//��������Ĳ��� 
	          xmlHttp.send(null);//�������� 
			  var tr=ch[i].parentNode;
			tr.parentNode.removeChild(tr);
			i--;
		}
	}
}

}

var modify = function(){
	hide('hide0');
	var str = document.getElementsByClassName("inp1");
    var xmlDoc = loadXML("2.xml");
	var ch =this.document.getElementsByName("checkbox");
	var count = 0;
	console.log(ch.length);
	for(var i = 0; i < ch.length; i++){
		if(ch[i].checked){
			count++;
		}
	}
	if(count==0){
		alert("��ѡ����Ҫ�޸ĵ�һ��");
		return;
	}else if(count>1){
		alert("һ��ֻ���޸�һ��");
		return;
	}
	else{
	show('hide1');
	for(var i = 0; i < ch.length; i++){
		if(ch[i].checked){
			var ft = str[0];
			ft.value = xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue;
			var tp = str[1];
			tp.value = xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
			var tm =str[2];
			tm.value = xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue;
			var nu = str[3];
			nu.value = xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue;
			var us = str[4];
			us.value = xmlDoc.getElementsByTagName("userid")[i].childNodes[0].nodeValue;
		}
	}
	}

}

var modifyData = function(){
	if(confirm("ȷ���޸ģ�")){
		var ch =this.document.getElementsByName("checkbox");
		var str = this.document.getElementsByClassName("inp1");
		var financetype = str[0].value;
		var type = str[1].value;
		var time = str[2].value;
		var num = str[3].value;
   		var userid =str[4].value;	
    	if(financetype==""){
        alert("����/֧������Ϊ��");
        return;
    	}
  	    if(type==""){
  	      alert("��֧���಻��Ϊ��");
  	      return;
  	    }
		if(time==""){
			alert("��֧���ڲ���Ϊ��");
			time.focus();
			return;
		}
		if(time.length!=10||time[4]!='/'||time[7]!='/'){
			alert("��������Ч����֧����");
			time.focus();
			return;
		}
		if(num==""){
  	      alert("����Ϊ��");
  	      return;
 	   }
 	   if(userid==""){
 	       alert("��ԱID����Ϊ��");
 	       return;
 	   }

	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("�������֧��http����");
		return;
	}	
		
		var id;
		var o = document.body;
		var flag=false;
		console.log(ch.length);
		for(var i = 0; i < ch.length; i++){
			if(ch[i].checked){
			  id = ch[i].id;
			  xmlHttp=getXmlHttpObject();
			  var url = "mod_finance.php";
	          url=url+"?id="+ch[i].id+"&financetype="+financetype+"&type="+type+"&time="+time+"&num="+num+"&userid="+userid;;
	          url=url+"&sid"+Math.random();
	          xmlHttp.onreadystatechange=stateChanged;
	          xmlHttp.open("GET",url,true);//��������Ĳ��� 
	          xmlHttp.send(null);//�������� 
			  var tr=ch[i].parentNode;
			  var p = tr.nextSibling;
			  tr.parentNode.removeChild(tr);
			  
			
		 	 var div = document.createElement("div"); 
			  div.style = "background-color:#CCFFFF";
		 	 var cb = document.createElement("input");
		 	 div.appendChild(cb);
			 cb.type = 'checkbox';
	    	 cb.name="checkbox";
			 cb.id=id;
			 console.log(cb);
         	 div.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+id+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+financetype+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+time+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+num+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+userid;
			 if(p)
	         o.insertBefore(div,p);
			 else
			 o.appendChild(div)
			 flag=true;
			 alert("�޸ĳɹ���");
			 break;
		}
	}
	if(flag==false)
		alert("��ѡ����Ҫ�޸ĵ�һ����¼��");
}	
hide('hide1');
}


var valid = function (){	
    var xmlDoc=loadXML("2.xml");
	var o = document.body; 
    var flag = false;
	var UserID = document.getElementById("textid");
	if(xmlDoc == "null")alert("null!");
	if(UserID.value==""){
        alert("�������ԱID");
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
             div.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+IDnumber+"&nbsp&nbsp&nbsp&nbsp";
			  var cb = document.createElement("input");
		 	 div.appendChild(cb);
			 cb.type = 'checkbox';
	    	 cb.name="checkbox";
			 cb.id=xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
	       o.appendChild(div);  
			flag = true;
		}
	}
	if(flag==false)alert("û�в�ѯ���κν����");
}

var validType = function (){
	 	
    var xmlDoc=loadXML("2.xml");
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
            div.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("financetype")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("spendingtime")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("num")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+xmlDoc.getElementsByTagName("userid")[i].childNodes[0].nodeValue+"&nbsp&nbsp&nbsp&nbsp";
			  var cb = document.createElement("input");
			 div.appendChild(cb);
			 cb.type = 'checkbox';
	    	 cb.name="checkbox";
			 cb.id=xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
	       o.appendChild(div);  
		flag=true;
		}
	}
	if(flag==false) alert("û�в�ѯ���κν����");	
}

var update = function (){

window.location.href="cxgn_id.htm"; 

}


function hide(x)
{
	var hide = document.getElementById(x);
	hide.style.display="none";
	hide.onload = null;
}

function show(x)
{
	var show = document.getElementById(x);
	show.style.display="inline";
	show.onload = null;
}


function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")// 
//0: ����δ��ʼ�� 
//1: �����������ѽ��� 
//2: �����ѽ��� 
//3: �������� 
//4: ��������ɣ�����Ӧ�Ѿ��� 
{ var a= xmlHttp.responseText;//����Ӧ���ݸ�ֵ��a 
if(a=="yes"){ 
alert("ע��ɹ���");
self.location='test.php';//��ת��Main.php 
}else{ 
//alert(a);
} 
} 
} 
