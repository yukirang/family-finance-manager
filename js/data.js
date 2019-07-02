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
var loadXML = function(xmlString){ //构建xmldoc对象
    
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

var getXmlHttpObject = function(){ //构建xmldoc对象
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
        alert("用户名不能为空.");
        username.focus();
        return;
    }
    if(pass.value==""){
        alert("密码不能为空.")
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
	if(flag==false)alert("用户名或密码错误！");
}

var register = function (){	
	var user = document.getElementById("reg_name").value;
    var pass = document.getElementById("reg_pass").value;
	var again = document.getElementById("reg_again").value;
    var xmlDoc=loadXML("1.xml");
	if(xmlDoc == "null")alert("null!");
	var userlist = xmlDoc.getElementsByTagName("user");
	
	if(user==""){
        alert("请输入用户名");
        user.focus();
        return;
    }
    if(pass==""){
        alert("请输入密码");
		pass.focus();
        return;
    }
	if(pass.length<6){
		alert("密码长度不得小于6位");
		return;
	}
	if(again==""){
		alert("请确认密码");
		again.focus();
		return;
	}
	if(pass!=again){
		alert("密码不一致");
		return;
	}
	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("浏览器不支持http请求！");
		return;
	}	
	var result = confirm("确认注册？");
	
	if(result){
	for(var i=0;i<userlist.length;i++){
		if(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue==user){
			alert("用户名已存在");
			return;
		}
	}
	var url = "test.php";
	url=url+"?user="+user+"&pass="+pass;
	url=url+"&sid"+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);//定义请求的参数 
	xmlHttp.send(null);//发送请求 
	alert("注册成功");
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
        alert("请选择收入/支出");
        return;
    }
    if(type==""){
        alert("请选择收支种类");
        return;
    }
	if(time==""){
		alert("请输入收支日期");
		time.focus();
		return;
	}
	if(!(Date.parse(time))||time.length!=10){
		alert("请输入有效的收支日期");
		time.focus();
		return;
	}
	if(id0==""){
        alert("请输入编号");
        return;
    }
	if(num==""){
        alert("请输入金额");
        return;
    }
    if(userid==""){
        alert("请输入成员ID");
        return;
    }
	var list = xmlDoc.getElementsByTagName("id");
	
	for(var i=0;i<list.length;i++){
		if(list[i].childNodes[0].nodeValue==id0){
			flag = false;
			console.log(id0);
			alert("编号已存在");
			break;
		}
	}

	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("浏览器不支持http请求！");
		return;
	}	
	var result = false;
	if(flag){
	    result = confirm("确认添加？");
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
	xmlHttp.open("GET",url,true);//定义请求的参数 
	xmlHttp.send(null);//发送请求 
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
var result = confirm("确认删除选中项？");
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
	          xmlHttp.open("GET",url,true);//定义请求的参数 
	          xmlHttp.send(null);//发送请求 
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
		alert("请选择需要修改的一项");
		return;
	}else if(count>1){
		alert("一次只能修改一项");
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
	if(confirm("确认修改？")){
		var ch =this.document.getElementsByName("checkbox");
		var str = this.document.getElementsByClassName("inp1");
		var financetype = str[0].value;
		var type = str[1].value;
		var time = str[2].value;
		var num = str[3].value;
   		var userid =str[4].value;	
    	if(financetype==""){
        alert("收入/支出不能为空");
        return;
    	}
  	    if(type==""){
  	      alert("收支种类不能为空");
  	      return;
  	    }
		if(time==""){
			alert("收支日期不能为空");
			time.focus();
			return;
		}
		if(time.length!=10||time[4]!='/'||time[7]!='/'){
			alert("请输入有效的收支日期");
			time.focus();
			return;
		}
		if(num==""){
  	      alert("金额不能为空");
  	      return;
 	   }
 	   if(userid==""){
 	       alert("成员ID不能为空");
 	       return;
 	   }

	xmlHttp=getXmlHttpObject();
	if(xmlHttp==null){
		alert("浏览器不支持http请求！");
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
	          xmlHttp.open("GET",url,true);//定义请求的参数 
	          xmlHttp.send(null);//发送请求 
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
			 alert("修改成功！");
			 break;
		}
	}
	if(flag==false)
		alert("请选择需要修改的一条记录！");
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
	if(flag==false)alert("没有查询到任何结果！");
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
	if(flag==false) alert("没有查询到任何结果！");	
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
//0: 请求未初始化 
//1: 服务器连接已建立 
//2: 请求已接收 
//3: 请求处理中 
//4: 请求已完成，且响应已就绪 
{ var a= xmlHttp.responseText;//把相应数据赋值给a 
if(a=="yes"){ 
alert("注册成功！");
self.location='test.php';//跳转到Main.php 
}else{ 
//alert(a);
} 
} 
} 
