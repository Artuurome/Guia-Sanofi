// Session IDLE TIMER --------------------------------------------------
	setAwayTimeout(1500000); // 5 min
	document.onAway = function() {
		//$('body').css('opacity', '0.1');
		//window.location = "<?php echo $path .'/public/logout.php' ;?>";
		window.location = "../../public/logout.php";
	}
// Session IDLE TIMER --------------------------------------------------


/*
 * Dropit v1.1.0 --- MENU PERFIL */

$(document).ready(function() {
    $('.menu').dropit();
});
