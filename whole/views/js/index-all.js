//category delete button status control
var C_del_status = true;

$(function()
{
	showDateTime();					//获取服务器时间
	var _t = setInterval(showDateTime(),5000);
	
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
						$("#main").html(data);				//展示各二级页面
						//show($(this).attr("title"));
						showCategoryList();
				}
			}); 
		});
	});
	
	
});

/**获取服务器时间**/
function showDateTime()
{
		$.get("application/controllers/util/gettime.php",function(data,status){
			if("success" == status){
				$("#date-show").html(data);
			}
		}); 
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
			showModalContent();			//获取弹出层内名称数量
			showRoomRack();				//获取位置信息，房间+机架量
			showFixLog();				//获取维修记录
			showCheckLog();				//获取定检记录
			showWhatWillEnd();				//获取即将到期设备
		}
	}); 	
}

/**获取maininfo，4类统计信息**/
function showMainInfo()
{
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
								},
						error:
							function(a,b,c){
								devnums[j][k] = {};
								devnums[j][k].y = 0;
								devnums[j][k].url = "#";
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
	},1);
}

function showFixLog(){
	$.get("index.php/api/fixlog?orderbydesc=time",function(data,status){
		if("success" == status){
			var str = "<table class=\"table table-bordered\"><thead><tr><th>时间</th><th>设备ID</th><th>损坏部分</th><th>详情</th></tr></thead><tbody>";
			for(var i = 0; i < ((data.length<=5)?data.length:5); i++){
				str += "<tr><td>"+data[i].time+"</td><td>"+data[i].dev_id+"</td><td>"+data[i].partname+"</td><td>"+data[i].detail+"</td></tr>";
			}
			str += "</tbody></table>";
                                
			$("#fix_log").html(str);
		}
	}); 
}

function showCheckLog(){
	$.get("index.php/api/checklog?orderbydesc=time",function(data,status){
		if("success" == status){
			var str = "<table class=\"table table-bordered\"><thead><tr><th>时间</th><th>设备ID</th><th>详情</th></tr></thead><tbody>";
			for(var i = 0; i < ((data.length<=5)?data.length:5); i++){
				str += "<tr><td>"+data[i].time+"</td><td>"+data[i].dev_id+"</td><td>"+data[i].detail+"</td></tr>";
			}
			str += "</tbody></table>";
                                
			$("#check_log").html(str);
		}
	}); 
}

function showWhatWillEnd(){
	$.get("index.php/api/Maininfo/index/5/1/?orderby=end_time",function(data,status){
		if("success" == status){
			var str = "<table class=\"table table-bordered\"><thead><tr><th>时间</th><th>设备ID</th><th>位置</th></tr></thead><tbody>";
			for(var i = 0; i < ((data.length<=5)?data.length:5); i++){
				//str += "<tr><td>"+data[i].end_time+"</td><td>"+data[i].id+"</td><td>该"+data[i].category+"设备维保开始时间为"+data[i].begin_time+"，品牌为"+data[i].brand+"，位置在"+data[i].room+"房间"+data[i].rack+"机架。</td></tr>";
				str += "<tr><td>"+data[i].end_time+"</td><td>"+data[i].id+"</td><td>"+data[i].room+"房间"+data[i].rack+"-"+data[i].pos_num+"</td></tr>";
			}
			str += "</tbody></table>";
                                
			$("#what_will_end").html(str);
		}
	}); 
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

function getdeviceContent(){
	$.get("index.php/api/Categorys/index",function(data,status){
		if("success" == status){
			for(var i=0; i<data.length; i++){
				$.ajax({
					type:"get",
					url:"index.php/api/Maininfo/getnum?category="+data[i].id,
					async:false,
					success:
						function(data1,status){
							if("success" == status){
								$('#modal_body_device').append("<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data[i].name+" </div>													<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data1[0].num+"台 </div>");
							}
						}
				});
			}
		}
	}); 
	
}
function getbrandContent(){
	$.get("index.php/api/Brands/index",function(data,status){
		if("success" == status){
			for(var i=0; i<data.length; i++){
				$.ajax({
					type:"get",
					url:"index.php/api/Maininfo/getnum?brand="+data[i].id,
					async:false,
					success:
						function(data1,status){
							if("success" == status){
								$('#modal_body_brand').append("<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data[i].name+" </div>													<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data1[0].num+"台 </div>");
							}
						}
				});
			}
		}
	}); 
}
function getsystemContent(){
	$.get("index.php/api/System/index",function(data,status){
		if("success" == status){
			for(var i=0; i<data.length; i++){
				$.ajax({
					type:"get",
					url:"index.php/api/Maininfo/getnum?function="+data[i].id,
					async:false,
					success:
						function(data1,status){
							if("success" == status){
								$('#modal_body_system').append("<div class=\"col-xs-8 col-sm-4 margin-bottom20\"> "+data[i].name+" </div><div class=\"col-xs-8 col-sm-4 margin-bottom20\"> "+data[i].function+" </div><div class=\"col-xs-8 col-sm-4 margin-bottom20\"> "+data1[0].num+"台 </div>");
							}
						}
				});
			}
		}
	});
}
function getassettagsContent(){
	$.get("index.php/api/Assettags/index",function(data,status){
		if("success" == status){
			for(var i=0; i<data.length; i++){
				$.ajax({
					type:"get",
					url:"index.php/api/Maininfo/getnum?asset_tag="+data[i].id,
					async:false,
					success:
						function(data1,status){
							if("success" == status){
								$('#modal_body_assets').append("<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data[i].number+" </div>													<div class=\"col-xs-8 col-sm-6 margin-bottom20\"> "+data1[0].num+"台 </div>");
							}
						}
				});
			}
		}
	}); 
}

function showModalContent()
{
	getdeviceContent();
	getbrandContent();
	getsystemContent();
	getassettagsContent();
}

/*main_category*/
function getCategory()
{
	var category = new Array([111,'server'], [222,'switcher'], [333,'storage'], [444,'workstation']);
	return category;
}


function changeDisable()
{
	if(C_del_status == true)
	{
		$(".C_content_del").removeAttr("disabled");
		
		$("#C_del").text("取消删除");
	}
	else
	{
		$("#C_del").text("删除");
		$(".C_content_del").attr("disabled","disabled");
		
	}
	C_del_status = !C_del_status;
}

function showCategoryList()
{
	var category = getCategory();
	for (var i=0; i<category.length; i++)
	{
		temp = genCategoryModal(category[i][0]);
		$('.mainInfo').append(temp);
		
		$('#c_content_table').append("<tr><th scope=\"row\">"+ category[i][0] +"</th><td>"+ category[i][1] +"</td><td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#C_content_m_" + category[i][0] + "\">修改</button><button type=\"button\" class=\"btn btn-primary C_content_del\" disabled=\"disabled\" id=\"C_content_d_"+ category[i][0] +"\">删除</button></td></tr>");
	}
	
	//$('#c_content_table').append("<tr><th scope=\"row\">1</th><td>服务器</td><td><button type=\"button\" class=\"btn btn-primary\">修改</button><button type=\"button\" class=\"btn btn-primary C_content_del\" disabled=\"disabled\" id=\"C_content_d_server\">删除</button></td></tr>");
}

function genCategoryModal(id)
{
	result = "<div class=\"modal fade\" id=\"C_content_m_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"C_content_m_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"C_content_m_"+id+"\"><b>修改设备类别</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\"> <div class=\"col-xs-8 col-sm-6 text-right margin-top5\">设备类别名称:</div> <div class=\"col-xs-8 col-sm-6 text-left\"><input type=\"text\" placeholder=\"设备类别名称\" /></div> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">保存</button> </div> </div> </div> </div>";
	return result;
}

/*main_category*/

