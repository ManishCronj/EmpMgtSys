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
var numberOfUser=parseInt(localStorage.getItem("nou"))||0;
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
    

     for(i=0;i<numberOfUser;i++)
    { 
      var key="user"+i;
      var pullobj=JSON.parse(localStorage.getItem(key));
    	if(uid==pullobj.uid2)
      {
    		flag==1;
    	alert("This user already exist");
      document.forms['abc'].reset();
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
  
	var index=parseInt(localStorage.getItem("index"))||0;
  var key2="user"+index;
  var empObject=JSON.parse(localStorage.getItem(key2));
  var temp=document.createElement('p');
  var text=document.createTextNode("User Id: " + empObject.uid2 + " Name : " + empObject.uname2 + " Remark: " + empObject.uremark2);
  temp.appendChild(text);
  var element=document.getElementById('showEmployeeDetail');
  element.appendChild(temp);
  return false; 	
}

//function to update Employee's remark

function update_remark()
{
  document.getElementById('showDetail').innerHTML+="<br /><center><label>Enter employee's Id : </label><input type='text' id='idForRemark'>&nbsp;&nbsp;<label>Give remark : </label><input type='text' id='updatedRemark'><br /><br /><input type='button' value='update' onclick='updateRemark()'></center>";

  return false;
}
function updateRemark()
{
 var i;
 var flag=false;
 var pullobj;
 var numberOfUser=parseInt(localStorage.getItem('nou'))||0;
 var empId=document.getElementById("idForRemark").value;
 var empRemark=document.getElementById("updatedRemark").value;
 if(empId==null || empId=="") 
   {
    alert("Enter employee's id");
    return false;
   }
 if(empRemark==null || empRemark=="")
 {
  alert("Enter remark");
  return false;
 }       
 for(i=0;i<numberOfUser;i++)
 {
  var key="user"+i;
  pullobj=JSON.parse(localStorage.getItem(key));
  if(empId==pullobj.uid2)
  {
    pullobj.uremark2=empRemark;
    localStorage.setItem(key,JSON.stringify(pullobj));
    flag=true;
    break;
  }
 }
 if(flag==false)
 {
  alert("Employee doesn't exist");
  return false;
 }
 if(i<numberOfUser)
 {
 alert(pullobj.uname2+"'s Remark Updated"); 
 document.getElementById('showDetail').innerHTML+="<br /> <center><p><h3>Remark Updated!!</h3></p></center>";
 selectemp();
 }
return false;
}

function selectemp()
{
  document.getElementById('udetails').style.visibility="hidden";
  document.getElementById('hroption').style.display="none";
  var numberOfUser=parseInt(localStorage.getItem("nou"))||0;
  document.getElementById('showDetail').style.display="unset";
  document.getElementById('ureg').style.display="none";
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
    document.getElementById('showDetail').innerHTML+="<br /><br />";
  }
  if(numberOfUser==0)
    {
      document.getElementById('showDetail').style.display="unset";
      document.getElementById('showDetail').innerHTML+="<p>oops! There is no emloyee registered yet!!</p>";
      document.getElementById('hroption').style.display="unset";
    }
    if(numberOfUser!=0)
    {
    document.getElementById('showDetail').innerHTML+="<center><input type='button' value='update remark' onclick='update_remark()'></center>";    
    }
    return false;
}

function adduser()
{
  var numberOfUser=parseInt(localStorage.getItem("nou"))||0;
  if(numberOfUser==0)
  {
    document.getElementById('showDetail').style.display="none";
    document.getElementById('ureg').style.display="unset";
  }
  document.getElementById('ureg').style.visibility="visible";
  document.getElementById('abc').style.visibility="visible";
  document.getElementById('hroption').style.display="none";
  return false;
}

