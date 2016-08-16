var numberOfUser=0;
var uarray=new Array();//array declaration
function hrcompare(){
localStorage.setItem("index",null);    //function to validate uid,pass
var hr_mail="hr@cronj.com";
var hr_pass="hrcronj";
numberOfUser=parseInt(localStorage.getItem("nou"))||0;
var id=document.getElementById("name").value;
var pass=document.getElementById("pass").value;
if(id==hr_mail && pass==hr_pass)
{
	document.getElementById('hrlogin').style.display="none";
document.getElementById('abc').style.visibility="hidden";
document.getElementById('hroption').style.visibility="visible";


}
else 
{
  
  for(var i=0;i<numberOfUser;i++)
    {
    var key1="user"+i;
    var pullobj=JSON.parse(localStorage.getItem(key1));
    if(id==pullobj.uid2 && pass==pullobj.upass2)
        {   
            localStorage.setItem("index",i);
            window.open("EmployeeSection.html");
            break;
        }
     
     
    }
   
}


return false;
}

function makeobject(uid1,uname1,upass1,uremark1)//function to make object
{ this.uid2=uid1; 
  this.uname2=uname1;
  this.upass2=upass1;
  this.uremark2=uremark1;

}
function save_user()//function to save user details
{
	
var i;
var flag=0;
	document.getElementById('hrlogin').style.visibility="visible";
	document.getElementById('udetails').style.visibility="visible";
	var uid=document.getElementById('uid').value;
	if(uid=="" || uid=="null")
		alert("enter user's id");
	var uname=document.getElementById('uname').value;
	if(uname=="" || uname=="null")
		alert("enter user's name");
	
    var upass=document.getElementById('upass').value;
    
    if(upass=="" || upass=="null")
		alert("enter user's password");
    var uremark=document.getElementById('uremark').value;
     if(uid=="" || uid=="null")
		alert("enter user's Initial remark, N.A. for not applicable");
    var user=new makeobject(uid,uname,upass,uremark);
    

     for(i=0;i<uarray.length;i++)
    {
    	if(uid==uarray[i].uid2)
      {
    		flag==1;
    	alert("This user already exist");
    	return false;
         
      }	
    }
    if(flag==0)
    {
       numberOfUser++;
       localStorage.setItem("nou",numberOfUser);
       var key="user"+(localStorage.length-2);
       localStorage.setItem(key,JSON.stringify(user));
    	 uarray.push(user);
       var len=uarray.length-1;
	     var temp=document.createElement('p');
	     var text=document.createTextNode(uarray[len].uname2);
	     temp.appendChild(text);
	     var element=document.getElementById('udetails');
	     element.appendChild(temp);
	     document.forms['abc'].reset();
	     return false;
    }
}
function empdetail()
{
  
	var index=parseInt(localStorage.getItem("index"));
  var key2="user"+index;
  var empObject=JSON.parse(localStorage.getItem(key2));
  var temp=document.createElement('p');
  var text=document.createTextNode("User Id: " + empObject.uid2 + " Name : " + empObject.uname2 + " Remark: " + empObject.uremark2);
  temp.appendChild(text);
  var element=document.getElementById('showEmployeeDetail');
  element.appendChild(temp);
  return false; 	
}

function empsearch()
{
  var i;
  
  var empid=document.getElementById('eid').value;
  

  var emppass=document.getElementById('epass').value;
  
  for(i=0;i<uarray.length;i++)
  {
    
    if(empid==uarray[i].uid2 && emppass==uarray[i].upass2)
    {
      localStorage.setItem("key",JSON.stringify(uarray[i]));
      
      checkvalue=i; 
      
      window.open('abcd.html');
      return false;
      break;
    }
     
  }
   
}
function update_remark()
{
  
  var pullobj1= JSON.parse(localStorage.getItem("key1"));
  alert(pullobj1.uremark2);
  uarray[checkvalue].uremark2=pullobj1.uremark2;
  alert(uarray[checkvalue].uremark2);
  return false;
}
function selectemp()
{
  document.getElementById('hroption').style.display="none";
  var numberOfUser=parseInt(localStorage.getItem("nou"));
  document.getElementById('ureg').style.display="none";
  /*var temp1=document.createElement('p');
  var text1=document.createTextNode("<a href='HomePage.html' style='text-align:right'>logout</a>");
  temp1.appendChild(text1);
  var element=document.getElementById("showDetail");
  element.appendChild(temp1);
  */
   document.getElementById('showDetail').innerHTML="<p style='text-align:right'><a href='HomePage.html'>logout</a></p>";  
  for(var emplist=0;emplist<numberOfUser;emplist++)
  {
    var key="user"+emplist;
    var pullobj=JSON.parse(localStorage.getItem(key));
    
    var temp2=document.createElement('span');
    
    var text2=document.createTextNode("Name : "+pullobj.uname2+"     Id : "+pullobj.uid2+"     Remark : "+pullobj.uremark2);
    
    
    temp2.appendChild(text2);
    var element=document.getElementById("showDetail");
    
    element.appendChild(temp2);
    document.getElementById('showDetail').innerHTML+="<input type='button' value='update remark'>";
    document.getElementById('showDetail').innerHTML+="<br /><br />";

  }

return false;
}

function adduser()
{
  document.getElementById('ureg').style.visibility="visible"
  document.getElementById('abc').style.visibility="visible";
  document.getElementById('hroption').style.display="none";
  return false;
}

