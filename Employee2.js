function remark()
{
	document.getElementById('empremark').innerHTML="<center><form onsubmit='return give_remark();'><textarea rows='10' cols='20' id='eremark'></textarea><br /><center><input type='submit' value='Done'></form><center>";
    
}
function give_remark()
{
	alert("in give_remark");
	var pullobj= JSON.parse(localStorage.getItem("key"));
	var remark=document.getElementById('eremark').value;
	pullobj.uremark2=remark;
	localStorage.setItem('key1',JSON.stringify(pullobj));
	update_remark();
    return false;
}