//category delete button status control
var C_del_status = true;
var B_del_status = true;
var S_del_status = true;


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
			//左侧导航点击标记flag							  
			leftMenuFlag = $(this).attr("title");
			$("#main").html("<img src='application/views/images/loading.gif' />");	
			$.get("application/views/main_"+leftMenuFlag+".php",function(data,status){
				if("success" == status){
						$("#main").html(data);				//展示各二级页面
						showLeftMenu(leftMenuFlag);
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

/**左侧导航点击加载静态页面后，异步加载动态数据**/
function showLeftMenu(flag){
	if("category" == flag){
		showCategoryList();
	}
	else if ("brand" == flag)
	{
		showBrandList();
	}
	else if ("system" == flag)
	{
		showSystemList();
	}
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
/**
---------------
|    INDEX    |
|    E N D    |
---------------
**/


//Delete button control for each page.
function changeDisable(tmp)
{
	
	if (tmp == "C")
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
	else if (tmp == "B")
	{
		if(B_del_status == true)
		{
			$(".B_content_del").removeAttr("disabled");
			
			$("#B_del").text("取消删除");
		}
		else
		{
			$("#B_del").text("删除");
			$(".B_content_del").attr("disabled","disabled");
			
		}
		B_del_status = !B_del_status;
	}
	else if (tmp == "S")
	{
		if(S_del_status == true)
		{
			$(".S_content_del").removeAttr("disabled");
			
			$("#S_del").text("取消删除");
		}
		else
		{
			$("#S_del").text("删除");
			$(".S_content_del").attr("disabled","disabled");
			
		}
		S_del_status = !S_del_status;
	}
	
}
//Delete button control for each page.

/**
------------------
|    CATEGORY    |
|      BEGIN     |
------------------
**/
function getCategory()
{
	var category = new Array([111,'server'], [222,'switcher'], [333,'storage'], [444,'workstation']);
	return category;
}




function showCategoryList()
{
	var category = getCategory();
	for (var i=0; i<category.length; i++)
	{
		//modification confirm page
		temp_m = genCategoryModal_m(category[i][0]);
		$('.mainInfo').append(temp_m);
		//delete confirm page
		temp_d = genCategoryModal_d(category[i][0]);
		$('.mainInfo').append(temp_d);
		
		$('#C_content_table').append("<tr><th scope=\"row\">"+ category[i][0] +"</th><td>"+ category[i][1] +"</td><td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#C_content_m_" + category[i][0] + "\">修改</button><button type=\"button\" class=\"btn btn-primary C_content_del\" data-toggle=\"modal\" disabled=\"disabled\" data-target=\"#C_content_d_" + category[i][0] + "\" id=\"C_content_button_d_"+ category[i][0] + "\">删除</button></td></tr>");
	}
	
	//$('#C_content_table').append("<tr><th scope=\"row\">1</th><td>服务器</td><td><button type=\"button\" class=\"btn btn-primary\">修改</button><button type=\"button\" class=\"btn btn-primary C_content_del\" disabled=\"disabled\" id=\"C_content_d_server\">删除</button></td></tr>");
}

//modification
function genCategoryModal_m(id)
{
	result = "<div class=\"modal fade\" id=\"C_content_m_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"C_content_m_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"C_content_m_"+id+"\"><b>修改设备类别</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\"> <div class=\"col-xs-8 col-sm-6 text-right margin-top5\">设备类别名称:</div> <div class=\"col-xs-8 col-sm-6 text-left\"><input type=\"text\" placeholder=\"设备类别名称\" /></div> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">保存</button> </div> </div> </div> </div>";
	return result;
}

//delete
function genCategoryModal_d(id)
{
	result = "<div class=\"modal fade\" id=\"C_content_d_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"C_content_d_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"C_content_d_"+id+"\"><b>删除</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\">确认删除 </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">确认</button> </div> </div> </div> </div>";
	return result;
}

/**
------------------
|    CATEGORY    |
|      END     |
------------------
**/

/**
------------------
|    BRAND    |
|      BEGIN     |
------------------
**/

function getBrand()
{
	var brand = new Array([111,'华为'], [222,'中兴'], [333,'华三'], [444,'HP']);
	return brand;
}

function showBrandList()
{
	var brand = getBrand();
	for (var i=0; i<brand.length; i++)
	{
		//modification confirm page
		temp_m = genBrandModal_m(brand[i][0]);
		$('.mainInfo').append(temp_m);
		//delete confirm page
		temp_d = genBrandModal_d(brand[i][0]);
		$('.mainInfo').append(temp_d);
		
		$('#B_content_table').append("<tr><th scope=\"row\">"+ brand[i][0] +"</th><td>"+ brand[i][1] +"</td><td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#B_content_m_" + brand[i][0] + "\">修改</button><button type=\"button\" class=\"btn btn-primary B_content_del\" data-toggle=\"modal\" disabled=\"disabled\" data-target=\"#B_content_d_" + brand[i][0] + "\" id=\"B_content_button_d_"+ brand[i][0] + "\">删除</button></td></tr>");
	}
	
	//$('#c_content_table').append("<tr><th scope=\"row\">1</th><td>服务器</td><td><button type=\"button\" class=\"btn btn-primary\">修改</button><button type=\"button\" class=\"btn btn-primary B_content_del\" disabled=\"disabled\" id=\"B_content_d_server\">删除</button></td></tr>");
}

//modification
function genBrandModal_m(id)
{
	result = "<div class=\"modal fade\" id=\"B_content_m_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"B_content_m_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"B_content_m_"+id+"\"><b>修改设备类别</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\"> <div class=\"col-xs-8 col-sm-6 text-right margin-top5\">设备类别名称:</div> <div class=\"col-xs-8 col-sm-6 text-left\"><input type=\"text\" placeholder=\"设备类别名称\" /></div> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">保存</button> </div> </div> </div> </div>";
	return result;
}

//delete
function genBrandModal_d(id)
{
	result = "<div class=\"modal fade\" id=\"B_content_d_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"B_content_d_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"B_content_d_"+id+"\"><b>删除</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\">确认删除 </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">确认</button> </div> </div> </div> </div>";
	return result;
}

/**
------------------
|    BRAND    |
|      END     |
------------------
**/

/**
------------------
|    SYSTEM    |
|      BEGIN     |
------------------
**/

function getSystem()
{
	var system = new Array([111,'1号平台','门户服务器'], [111,'1号平台','上游服务器'], [111,'1号平台','下游服务器'], [111,'1号平台','内容传输服务器']);
	return system;
}

function showSystemList()
{
	var system = getSystem();
	for (var i=0; i<system.length; i++)
	{
		//modification confirm page
		temp_m = genSystemModal_m(system[i][0]);
		$('.mainInfo').append(temp_m);
		//delete confirm page
		temp_d = genSystemModal_d(system[i][0]);
		$('.mainInfo').append(temp_d);
		
		$('#S_content_table').append("<tr><th scope=\"row\">"+ system[i][0] +"</th><td>"+ system[i][1] +"</td><td>"+ system[i][2] +"</td><td><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#S_content_m_" + system[i][0] + "\">修改</button><button type=\"button\" class=\"btn btn-primary S_content_del\" data-toggle=\"modal\" disabled=\"disabled\" data-target=\"#S_content_d_" + system[i][0] + "\" id=\"S_content_button_d_"+ system[i][0] + "\">删除</button></td></tr>");
	}
	
	//$('#c_content_table').append("<tr><th scope=\"row\">1</th><td>服务器</td><td><button type=\"button\" class=\"btn btn-primary\">修改</button><button type=\"button\" class=\"btn btn-primary S_content_del\" disabled=\"disabled\" id=\"S_content_d_server\">删除</button></td></tr>");
}

//modification
function genSystemModal_m(id)
{
	result = "<div class=\"modal fade\" id=\"S_content_m_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"S_content_m_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"S_content_m_"+id+"\"><b>修改系统分类信息</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\"> <div class=\"col-xs-8 col-sm-6 text-right margin-top5\">系统分类名称:</div> <div class=\"col-xs-8 col-sm-6 text-left\"><input type=\"text\" placeholder=\"系统分类名称\" /></div> </div> <div class=\"row text-center font-size16\" id=\"\"> <div class=\"col-xs-8 col-sm-6 text-right margin-top5\">系统应用功能:</div> <div class=\"col-xs-8 col-sm-6 text-left\"><input type=\"text\" placeholder=\"系统应用功能\" /></div> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">保存</button> </div> </div> </div> </div>";
	return result;
}

//delete
function genSystemModal_d(id)
{
	result = "<div class=\"modal fade\" id=\"S_content_d_"+id+"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"S_content_d_"+id+"\"> <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"S_content_d_"+id+"\"><b>删除</b></h4> </div> <div class=\"modal-body\"> <div class=\"row text-center font-size16\" id=\"\">确认删除 </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button> <button type=\"button\" class=\"btn btn-primary\">确认</button> </div> </div> </div> </div>";
	return result;
}

/**
------------------
|    SYSTEM    |
|      END     |
------------------
**/

