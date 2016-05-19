"use strict";


$(document).ready(function () 
{ 
        
    $("body").fadeIn(2000);
        
    $("#img").click(function () 
    { 
            $(".background").fadeOut(2000); 
    });
        
        
    $("#picture").click(function () 
    { 
            $("#img").attr("src", "img/3.jpg"); 
    });
});