"use strict";
/*global $ */
	
    //FOTO'S UIT EEN SITE DECLAREREN
    var picArray = ["f5133cb1705d259b32e084b0c1e531e5_large.jpg", "4572cf86008755df12e3f13e8caf4f0a_large.jpg"
                    ,"a9c5493274fbef70b51289dd47cc86b3_large.jpg","95f700eb7d067cf3090de50535556554_large.jpg"
                    ,"bfa91d008c03e910c864484c14412d50_large.jpg","6a828e18be6a567567f304350ee14cf7_large.jpg"];

	var url = "http://img.mobypicture.com/";



    
$(document).ready(function () 
{
    var i, pic, bron, thumb;
        
    $("#galerij").html("<div id='frame'><img /><\/div>" + "<ul class='fotolijst'><\/ul>");
    $("#frame img").attr("src", url + picArray[0]); 
		
    for (i = 0; i < picArray.length; i += 1) 
    {
        pic     = picArray[i];
        bron     = url + pic;
        thumb    = bron.replace("_large.jpg", "_square.jpg");
			
        $(".fotolijst").append("<li><a href='#' data-rel='" + i + "'><img src='" + thumb + "'><\/a><\/li>");
    }
		
        
    function soFadeImg() 
    {
			
        var index   = parseInt($(this).attr("data-rel"), 10),
                bron    = url + picArray[index];
            
        $("#frame").css("background-image", "url(" + $("#frame img").attr("src") + ")");
        $("#frame").html("<img style='display:none;'>");
        $("#frame img").attr("src", bron);
        $("#frame img").fadeIn("slow");
    }
		
    $(".fotolijst a").on("click", soFadeImg);
    $(".fotolijst a").on("mouseenter", soFadeImg);
					
});