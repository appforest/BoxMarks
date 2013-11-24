$(document).ready(function() {
	// THE BOOKMARK BOXES:
	// Getting the data from the Json file
 	$.getJSON("bmarks.json",function(data){
 		// Dinamically creating the boxes for every record found in the Json file
 		for(site in data.bmarks){
	 		$("#boxesContainer").append('<li><a href="'+data.bmarks[site].xurl+'"><div class="bBox cat_'+data.bmarks[site].category+'"><div><div class="row"><div class="large-12 columns style_'+data.bmarks[site].category+'"><h4>'+data.bmarks[site].name+'</h4> </div> </div> <div class="row"> <div class="large-12 columns"><h3><small>'+data.bmarks[site].descr+'</small></h3></div></div><div class="row bottom tags"><div class="large-12 columns"><ul><li>'+data.bmarks[site].tags+'</li></ul></div></div><div class="row bottom pic"> <div class="large-12 columns">'+data.bmarks[site].pic+'</div></div></div></div></a></li>');
 		}
 	});
 	// THE FILTER BUTTONS:
 	// Getting the data from the Json file, in this case we need the 'category' data, this will be used to filter the boxes later
 	$.getJSON("bmarks.json",function(data){
 		// The categories will be stored inside the 'category' array
 		var category=[];
 		// Iterating inside the Json file to get the category data
 		for(site in data.bmarks){
 			// The data is pushed to the 'category' array
 			category.push(data.bmarks[site].category);
 		}
 		// Getting -each- -unique- value from the 'category' array
 		$.each($.unique(category), function(index, val){
			// Creating the buttons that will filter the bookmark boxes [TO DO: Toggle event so when the user clicks the button again the whole content is shown again]
			// Giving each button the same background color as the bookmark box
 			$("#classFilters").append('<li><a class="style_'+val+' filter_'+val+'">'+val+'</a></li>')
 			// The filtering
 			$(".filter_"+val+"").click(function(){
 				$(".bBox").css('display', 'none').filter(".cat_"+val+"").css('display', '');
 			});
 		});
 	});
 	//Show the category
	$("body").on("mouseenter", ".bBox", function () {
		var picc = $(this).find(".tags");
		picc.fadeIn("fast");
	});
	//Hide the category
	$("body").on("mouseleave", ".bBox", function () {
		var picc = $(this).find(".tags");
		picc.fadeOut("slow");
	});
});
