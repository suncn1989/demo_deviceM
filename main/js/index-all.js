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
	
	nums = getRoomNum();
	//show floor
	showRooms(nums);
}
);


function showRooms(roomN)
{
	//tabs
	$('#position_content_tabs').append("<li class=\"active\"><a href=\"#position_content_content_"+ roomN[0]+"\" data-toggle=\"tab\">"+ roomN[0] +"</a></li>");
	for (var i=1; i<roomN.length; i++)
	{
		$('#position_content_tabs').append("<li><a href=\"#position_content_content_" + roomN[i] + "\" data-toggle=\"tab\">"+ roomN[i] +"</a></li>");
	}
	//tabcontent
	//tab0
	$('#position_content_tabs_content').append("<div id=\"position_content_content_" + roomN[0] + "\" class=\"tab-pane fade in active\"></div>");
	//show tab0's chart
	showChart(0);
	for (var i=1; i<roomN.length; i++)
	{
		$('#position_content_tabs_content').append("<div id=\"position_content_content_" + roomN[i] + "\" class=\"tab-pane fade\"></div>");
		showChart(i);
	}
	
}


function showChart(index)
{
	
	$('#position_content_content_'+nums[index]).highcharts({
        chart: {
            type: 'column',
			reflow:true
        },
        title: {
            text: '设备位置示意图'
        },
        subtitle: {
            text: nums[index]+'楼机架设备示意图'
        },
		credits: {
            enabled:false
			//text: 'JSBC IPTV',
			//href: 'about.html'
        },
        xAxis: {
            categories: getRackID(index)
        },
        yAxis: {
            min: 0,
            title: {
                text: '设备数量 (个)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:f} 台</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
		
        series: [{
            name: '设备数量',
            data: getDeviceNum(index),
			events:{
				click: function(e)
				{  
                	alert('The bar was clicked, and you can add any other functions.');  
                }  
			},

        }]
    });
	$('#position_content_content_'+nums[index]).highcharts().reflow();
}

function getRoomNum()
{
	return [3,5,6,16,32];
}

function getRackID(index)
{
	var rackID = new Array(
	 						['A03-37','A02-37','A03-34','A03-31','A03-21','A02-21','A03-6','A02-6','E8-19','E8-21','E5-17','E5-13'],
							['A','A02-37','A03-34'],
							['37','A02-37','A03-34','A03-31','A03-21','A02-21','A03-6','A02-6','E8-19','E8-21','E5-17','E5-13'],
							['037','A02-37','A03-34','A03-31','A03-21','A02-21','A03-6','A02-6','E8-19','E8-21'],
							['3-37','A02-37','A03-34','A03-31','A03-21']);
	return rackID[index];
}

function getDeviceNum(index)
{
	var deviceNum = new Array( [
			{y:6,url:"www.baidu.com"},
			{y:10,url:"www.renren,com"},
			{y:3,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"},
			{y:6,url:"www.baidu.com"},
			{y:8,url:"www.baidu.com"},
			{y:7,url:"www.baidu.com"},
			{y:5,url:"www.baidu.com"},
			{y:3,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"}
			
		],
		[
			{y:3,url:"www.baidu.com"},
			{y:2,url:"www.renren,com"},
			{y:1,url:"www.baidu.com"},			
		],
		[
			{y:9,url:"www.baidu.com"},
			{y:8,url:"www.renren,com"},
			{y:7,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"},
			{y:6,url:"www.baidu.com"},
			{y:8,url:"www.baidu.com"},
			{y:7,url:"www.baidu.com"},
			{y:5,url:"www.baidu.com"},
			{y:3,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"}
			
		],
		[
			{y:8,url:"www.baidu.com"},
			{y:3,url:"www.renren,com"},
			{y:1,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"},
			{y:6,url:"www.baidu.com"},
			{y:8,url:"www.baidu.com"},
			{y:7,url:"www.baidu.com"},
			{y:5,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"}
			
		],
		[
			{y:6,url:"www.baidu.com"},
			{y:10,url:"www.renren,com"},
			{y:3,url:"www.baidu.com"},
			{y:2,url:"www.baidu.com"},
			{y:1,url:"www.baidu.com"}
			
		]
		);
		
		return deviceNum[index];
}
