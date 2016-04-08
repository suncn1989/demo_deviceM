
$(function()
{
	showDateTime();					//获取服务器时间
	
	/**获取首页div-main信息**/
	showMainIndex(); 
	
	/**LOGO点击事件**/
	$("#logo").click(function(){showMainIndex();});
	
	/**左侧导航点击事件**/
	$("#left-menu").each(function(index){
		$(this).children().click(function(){
			$("#main").html("<img src='application/views/images/loading.gif' />");	
			$.get("application/views/main_"+$(this).attr("title")+".php",function(data,status){
				if("success" == status){
					setTimeout(function(){
						$("#main").html(data);				//展示各二级页面
					},1000);
				}
			}); 
		});
	});
	
	
});

/**获取服务器时间**/
function showDateTime()
{
	var _t = setInterval(function(){
		$.get("application/controllers/util/gettime.php",function(data,status){
			if("success" == status){
				$("#date-show").html(data);
			}
		}); 
	},1000);
}

/**
---------------
|    INDEX    |
|    BEGIN    |
---------------
**/

/**获取首页div-main信息**/
function showMainIndex(){
	$.get("application/views/main_index.php",function(data,status){
		if("success" == status){
			$("#main").html(data);				//展示首页静态页面
			showMainInfo();				//获取maininfo，4类统计信息
			showRoomRack();
							//获取位置信息，房间+机架
		}
	}); 	
}

/**获取maininfo，4类统计信息**/
function showMainInfo()
{
	setTimeout(function(){
		$.get("index.php/api/Categorys/getnum",function(data,status){
			if("success" == status){
				$("#mainInfo1_num").html(data);
			}
		}); 
		$.get("index.php/api/Brands/getnum",function(data,status){
			if("success" == status){
				$("#mainInfo2_num").html(data);
			}
		}); 
		$.get("index.php/api/System/getnum",function(data,status){
			if("success" == status){
				$("#mainInfo3_num").html(data);
			}
		}); 
		$.get("index.php/api/Assettags/getnum",function(data,status){
			if("success" == status){
				$("#mainInfo4_num").html(data);
			}
		}); 
	},1000);
	
}

/**获取房间机架信息**/
function showRoomRack()
{
	$.get("index.php/api/position/index",function(data,status){
		if("success" == status){
			var len = data.length;
			var roomJsonArray = [];
			var roomJsonArray_index = 0;
			outer:
			for(var i = 0; i < len; i++){
				if(0 == roomJsonArray.length){
					roomJsonArray[roomJsonArray_index] = {};
					roomJsonArray[roomJsonArray_index].room = data[i].room;
					roomJsonArray[roomJsonArray_index].rack = [];
					roomJsonArray[roomJsonArray_index].rack.push(data[i].rack);
					roomJsonArray_index++;
				}else{
					for(var j = 0; j < roomJsonArray.length; j++){
						if(data[i].room == roomJsonArray[j].room){
							roomJsonArray[j].rack.push(data[i].rack);
							continue outer;
						}else{
							continue;
						}
					}
					roomJsonArray[roomJsonArray_index] = {};
					roomJsonArray[roomJsonArray_index].room = data[i].room;
					roomJsonArray[roomJsonArray_index].rack = [];
					roomJsonArray[roomJsonArray_index].rack.push(data[i].rack);
					roomJsonArray_index++;
				}
			}
			/**show房间**/
			showRooms(roomJsonArray);
			
			racks = [];
			for(var i = 0; i < roomJsonArray.length; i++){
				racks.push(roomJsonArray[i].rack);
			}
			
			devnums = [];
			
			for(var j = 0; j < roomJsonArray.length; j++){
				devnums[j] = [];
				for(var k = 0 ; k < roomJsonArray[j].rack.length;k++){
					$.ajax({
						type:"get",
						url:"index.php/api/Maininfo?room="+roomJsonArray[j].room+"&rack="+roomJsonArray[j].rack[k],
						async:false,
						success:
							function(data,status){
									if("success" == status){
										devnums[j][k] = {};
										devnums[j][k].y = data.length;
										devnums[j][k].url = "www.baidu.com";
									}
								}
						   });
				}
				
			}
			/**show机架**/
			showRacks(roomJsonArray)
			
		}
	}); 
}
/**show房间**/
function showRooms(roomJsonArray)
{
	//tabs
	$('#position_content_tabs').append("<li class=\"active\"><a href=\"#position_content_content_"+ roomJsonArray[0].room+"\" data-toggle=\"tab\">"+ roomJsonArray[0].room +"</a></li>");
	for (var i=1; i<roomJsonArray.length; i++)
	{
		$('#position_content_tabs').append("<li><a href=\"#position_content_content_" + roomJsonArray[i].room + "\" data-toggle=\"tab\">"+ roomJsonArray[i].room +"</a></li>");
	}
	
}
/**show房间**/
function showRacks(roomJsonArray)
{
	$('#position_content_tabs_content').append("<div id=\"position_content_content_" + roomJsonArray[0].room + "\" class=\"tab-pane fade in active\"><img src='application/views/images/loading.gif' /></div>");
	/**show表格示意图**/
	showChart(roomJsonArray,0,racks,devnums);
	
	for (var i=1; i<roomJsonArray.length; i++)
	{
		$('#position_content_tabs_content').append("<div id=\"position_content_content_" + roomJsonArray[i].room + "\" class=\"tab-pane fade \"><img src='application/views/images/loading.gif' /></div>");
		/**show表格示意图**/
		showChart(roomJsonArray,i,racks,devnums);
	}
	
}

/**show表格示意图**/
function showChart(nums,index,racks,devnums)
{
	setTimeout(function(){
		$('#position_content_content_'+nums[index].room).highcharts({
			chart: {
				type: 'column',
			},
			title: {
				text: '设备位置示意图'
			},
			subtitle: {
				text: nums[index].room+'机架设备示意图'
			},
			credits: {
				enabled:false
			},
			xAxis: {
				categories: racks[index]
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
				data: devnums[index],
				events:{
					click: function(e)
					{  
						alert('The bar was clicked, and you can add any other functions.');  
					}  
				},
	
			}]
		});
	},1000);
}


/**
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
			{y:2,url:"www.baidu.com"}			
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
			{y:8,url:"www.baidu.com"}
			
		]
		return deviceNum[index];
}
**/