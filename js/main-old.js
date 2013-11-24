$(document).ready(function() {
	var items=[];
 	$.getJSON("bmarks.json",function(data){
 		for(site in data.bmarks){
	 		$("#boxesContainer").append('<li><a href="'+data.bmarks[site].xurl+'"><div class="bBox cat_'+data.bmarks[site].category+'"><div><div class="row"><div class="large-12 columns '+data.bmarks[site].category+'"><h4>'+data.bmarks[site].name+'</h4> </div> </div> <div class="row"> <div class="large-12 columns"><h3><small>'+data.bmarks[site].descr+'</small></h3></div></div><div class="row bottom tags"><div class="large-12 columns"><ul><li>'+data.bmarks[site].tags+'</li></ul></div></div><div class="row bottom pic"> <div class="large-12 columns">'+data.bmarks[site].pic+'</div></div></div></div></a></li>');
 		}
 	});
 	//classFilters
 	$.getJSON("bmarks.json",function(data){
 		for(site in data.bmarks){
	 		$("#classFilters").append('<li><a class="style_'+data.bmarks[site].category+' filter_'+data.bmarks[site].category+'">'+data.bmarks[site].category+'</a></li>');
 		}
 	});

	$("body").on("mouseenter", ".bBox", function () {
		var picc = $(this).find(".tags");
		picc.fadeIn("fast");
	});
	$("body").on("mouseleave", ".bBox", function () {
		var picc = $(this).find(".tags");
		picc.fadeOut("slow");
	});
	$("#filter").click(function(){
		$(".bBox").css('display', 'none').filter(".cat_css").css('display', '');
	})
});
