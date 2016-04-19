"use strict";
     
            
    $(document).ready(function ()
    {
        $('thead tr').css("background-color", "#F08080");
        $('tbody tr:odd').css("background-color", "#FF00FF");
        $('tbody tr:even').css("background-color", "#FF1493");
        
        $("#zoek").change(function () 
        {
            var tekst = $(this).val();
            $("tbody tr").hide();
            $("tbody tr td:contains('" + tekst + "')").parent().show();
        });
    }); 
        
        
      