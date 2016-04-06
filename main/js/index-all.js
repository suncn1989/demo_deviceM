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

$(function () {
    $('#position_content_content_3f').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: '设备位置示意图'
        },
        subtitle: {
            text: '3楼机架设备示意图'
        },
		credits: {
            enabled:false
			//text: 'JSBC IPTV',
			//href: 'about.html'
        },
        xAxis: {
            categories: getRackID()
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
            data: getDeviceNum(),
			events:{
				click: function(e){  
                                        alert('The bar was clicked, and you can add any other functions.');  
                                    }  
			},

        }]
    });
});

function getRackID()
{
	return ['A03-37','A02-37','A03-34','A03-31','A03-21','A02-21','A03-6','A02-6','E8-19','E8-21','E5-17','E5-13'];
}

function getDeviceNum()
{
	return [
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
			
		]
}
