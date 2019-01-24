$( document ).ready(function() {
	jQuery("header .toggle").click(function(){
		$(".mainMenu").toggleClass("active");
		$(".subNav").slideUp();
	});
	$(".hasSub").click(function(){
		$(".subNav").slideToggle();
	});
	$(".cardToggle").click(function(){
		$(this).find("p").slideToggle();
		$(this).find(".expandIcon").toggleClass("rotate");
	});
	$(".toggle").click(function(){
		if ($(".mainMenu").hasClass("active")) {
			$(".toggle").text("Close Menu");
		} else {
			$(".toggle").text("Open Menu");
		}
	});
	$("#gallery").unitegallery({
		tiles_type:"justified",
		lightbox_type:"compact",
		tiles_justified_space_between:40,
		tile_enable_border:true,
		tile_border_color: "#ffffff",
		tile_border_width:5,
	});
	$("#gallery2").unitegallery({
		tiles_type:"justified",
		lightbox_type:"compact",
		tiles_justified_space_between:40,
		tile_enable_border:true,
		tile_border_color: "#ffffff",
		tile_border_width:5,
	});
	$(".galSelect").click(function(){
		$("#selection").toggleClass("hidden");
	});
	$(".close").click(function(){
		$("#selection").toggleClass("hidden");
	});
	$(".homepageHero").sss({
		slideShow: true,
		transition: 1700,
		speed: 6000,
	});
});