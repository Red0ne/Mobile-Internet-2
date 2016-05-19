"use strict";

    $(document).ready(function () 
    {
          
    //****************** verkleinen ******************
            
            
        $("#klein").click(function () 
        {
                var grootte = parseFloat($("p").css("font-size"));
                    
                $("p").css("font-size", ((.8 * grootte) > 3 ? (.8 * grootte) : 3) + "px");
        });

            
            
            
            
   //****************** vergroten ******************
            
        $("#groot").click(function () 
        {
                var grootte = parseFloat($("p").css("font-size"));
                        
                $("p").css("font-size",(1.2 * grootte) + "px");
                
        });
            
    });