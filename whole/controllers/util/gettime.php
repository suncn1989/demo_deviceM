<?php
    date_default_timezone_set('PRC');
	
	echo "<span id='date-time'>".date("h:i",time())."</span><p id='date-date'>".date("Y-m-d",time())."</p>";
?>