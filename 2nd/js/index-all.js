$(document).ready(function(){
	var _t = setInterval(function(){
		$.get("application/controllers/util/gettime.php",function(data,status){
			$("#date-time").html(data);
		}); 
	},1000);
	
	
});