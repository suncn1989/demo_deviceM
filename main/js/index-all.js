// JavaScript Document
$(function()
{
	var mydate = new Date();
	var t = "";
	t += mydate.getFullYear()+"-";
	t += mydate.getMonth()+1+"-";
	t += mydate.getDate();
	//var t = mydate.toLocaleString();
	$("#date-date").text(t);
	
	nowTime = "";
	nowTime += mydate.getHours()+":";
	nowTime += mydate.getMinutes();
	$("#date-time").text(nowTime);
}
);
