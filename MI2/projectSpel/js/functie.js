  "use strict";

$(function()
  {
    
    
/**************************************** Start Pagina  **********************************************/
    
    
        var audiostart  = $("#audioStart")[0];
        var audioplay   = $("#audiobtnplay")[0];
        var audioGood   = $("#audioGood")[0];
        var audioBad    = $("#audioBad")[0];
        var audiofail   = $("#fail")[0];
        var audiodab    = $("#dab")[0];
        var audiolvl    = $("#audiolvl")[0];
        var lvlDisMoi;
        var cijfers;
        var maxCijfers  = 0;
        var teller      = 0;
        var tijdOver    = 7;
        var timer;
        var score       = 0;
        var openlvl     = 1;
        var letters;
        var item;
        var timer1;
        var words;
        var item3;
        var timer3;
        
        
            
            
            
            
    
/**************************************** Start Pagina  **********************************************/
    
    

    $(document).ready(function () 
    {       
        $("#start").fadeIn(0);
        audiostart.play();
        $("#pageLevel").fadeOut(0);
        $("#pageSpel").fadeOut(0);
        $("#WilGet").fadeOut(0);
        $("#GoverPage").fadeOut(0);
        
    
        
    });
    
    
    
    var soundOff = false;
    
            $("#soundOn").click(function ()
            {   
                if (soundOff == false)
                {
                    $("#audioStart").prop('muted', true);
                    $("#soundOn").attr("src","img/soundOff.png");
                    soundOff = true;
                }
        
                else
                {
                    $("#audioStart").prop('muted', false);
                    $("#soundOn").attr("src","img/soundOn.png");
                    soundOff = false;
                }
            });
    
    
    
  
 
/**************************************** Spel Pagina  **********************************************/
    
    
    
    $("#btnplay").click(function()
    {
        $("#start").fadeOut(100);
        audiostart.pause();
        $("#pageLevel").fadeIn(0);
        audioplay.play();
        $("#txtlvl").animate({left: '5%', top: "10%"}, 1000);
        document.getElementById("lvl2").disabled = true;
        document.getElementById("lvl3").disabled = true;
            
    });
    
    
    $("#lvl1").click(function()
    {
        
        $("#pageSpel").fadeIn(2000);
         document.getElementById('pageSpel').style.backgroundImage="url(img/background.jpg)";
        $("#pageLevel").fadeOut(0);
        audioplay.pause();
        audiolvl.play();
        
        timer = setInterval(seconden, 1000);
        cijfers  = Math.floor(Math.random() * 100);
            
            
            setTimeout(function()
            {
                
                $("#boxApp").fadeIn(3000);
                $("#antwoord").fadeIn(3000);
                $("#WilGet").html(cijfers);
                $("#WilGet").fadeIn(350);
                $("#WilGet").animate({fontSize: "80px"}, 300);
                $("#opties").fadeIn(350);
                
            }, 500);  
        
            setTimeout(function()
            {
               $("#WilGet").fadeOut(350);
            }, 1000); 
    
        lvlDisMoi = 1;        
    });
    
    
  
    
   
/**************************************** Button Antwoord  **********************************************/
    
    
        $("#btnok").click(function()
        {
                  
            if (lvlDisMoi == 1) 
            {  
                spel(); 
            }
            
            if (lvlDisMoi == 2) 
            { 
                spel2();
            }
            
            if (lvlDisMoi == 3) 
            { 
                spel3();
            }
        });
    
        
        $(document).keydown(function(e)
        {
            if(lvlDisMoi == 1)
            {
                if(e.keyCode == 13)
                {
                    spel();
                }
            
              
            }
            
            
            if(lvlDisMoi == 2)
            {
                if(e.keyCode == 13)
                {
                    spel2();
                }
            
              
            }
            
            
            if(lvlDisMoi == 3)
            {
                if(e.keyCode == 13)
                {
                    spel3();
                }
            
               
            }
            
        });
    
        
        
        
            
            
    
    
    
    
    
/**************************************** Spel Functie  **********************************************/ 
    
            function spel()
            {
                 if (cijfers >= 0)
                {
                    var resultaat = document.getElementById('inputAnt').value;
                    
                    teller++;
                    document.getElementById('count').innerHTML = teller + " /10";
                    tijdOver = 6;
                    
                    
                    
                    
                    if (cijfers == resultaat)
                    {
                        $("#feedback").text("Good!");
                        $("#feedback").css('color', 'darkgreen');
                        audioGood.play();
                        score++;
                    }

                    else
                    {
                        $("#feedback").text("BAD !");
                        $("#feedback").css('color', 'darkred');
                        audioBad.play();
                    }
            
                    
                    setTimeout(function() 
                    {
                        cijfers  = Math.floor(Math.random() * 100);
                        $("#feedback").text("");
                        $("#WilGet").html(cijfers);
                        $("#WilGet").fadeIn(350);
                        $("#inputAnt").val('');
                    }, 500);
            
                    setTimeout(function() 
                    {
                        $("#WilGet").fadeOut(350);  
                    }, 1000);
                }
            
                if (teller == 10)
                {
                    $("#pageSpel").fadeOut(0);
                    clearInterval(timer);
                    point();
                    
                }
                
            }
    
    
    
/**************************************** Timer  **********************************************/ 
    
    function seconden()
    {
        tijdOver -= 1;
        document.getElementById('tijd').innerHTML = "TIME : " + tijdOver;
        
        if(tijdOver == 0)
        {
            spel();
            
            if (teller == 10)
            {
                $("#pageSpel").fadeOut(0);
                clearInterval(timer);
                point();
            }
        }
    }
            
     


/**************************************** SCORE **********************************************/



 function point()
    {
        if( score >= 5)
            {
                $("#imglose").attr('src', 'img/dab.gif');
                $("#txtlose").html('YOU WIN !');
                document.getElementById('txtscore').innerHTML = score + " /10";
                $("#txtlose").css('color', 'darkgreen');
                $("#txtscore").css('color', 'darkgreen');
                $("#btnNT").html('LEVELS');
                audiodab.play();
                
                if( lvlDisMoi == 1)
                {
                     openlvl = 2;   
                }
                
                if( lvlDisMoi == 2)
                {
                     openlvl = 3;   
                }
                
                
                $("#btnNT").click(function()
                {
                    if (openlvl == 2)
                    {
                       document.getElementById("lvl2").disabled = false;
                        $("#lvl2").css('background', '#696969');
                    
                        $("#lvl2").mouseover(function(){ 
                        
                        $("#lvl2").css('background', '#09e6d4');
                        $("#lvl2").css('cursor', 'pointer');
                        
                        });
                    
                        $("#lvl2").mouseout(function(){ 
                        
                        $("#lvl2").css('background', '#696969');
                        
                        }); 
                    }
                    
                    
                    
                    
                    if (openlvl == 3)
                    {
                        document.getElementById("lvl3").disabled = false;
                        $("#lvl3").css('background', '#696969');
                    
                        $("#lvl3").mouseover(function(){ 
                        
                        $("#lvl3").css('background', '#09e6d4');
                        $("#lvl3").css('cursor', 'pointer');
                        
                        });
                    
                        $("#lvl3").mouseout(function(){ 
                        
                        $("#lvl3").css('background', '#696969');
                        
                        });
                    }
                    
                    $("#pageLevel").fadeIn(1000);
                    $("#GoverPage").fadeOut(0);
                    audiodab.pause();
                    teller=0;
                    $('#count').html("0 /10");
                    score=0;
                    
                    
                    
                })
                
          
            }
        
       if ( score < 5)
            {
                $("#imglose").attr('src', 'img/decu.gif');
                $("#txtlose").html('YOU LOSE ...');
                document.getElementById('txtscore').innerHTML = score + " /10";
                $("#txtlose").css('color', 'darkred');
                $("#txtscore").css('color', 'darkred');
                $("#btnNT").html('Try Again');
                audiofail.play();
                
                $("#btnNT").click(function()
                {  
                    
                    $("#pageLevel").fadeIn(1000);
                    $("#GoverPage").fadeOut(0);
                    teller=0;
                    $('#count').html("0 /10");
                    
                    
                })
            }

        $("#GoverPage").fadeIn(0);
        
        
    }
    
    
    
    
/**************************************** LEVEL2 **********************************************/
    
    
    $("#lvl2").click(function()
    { 
        
        
        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                   'u', 'v', 'v', 'w', 'x', 'y', 'z', 'ab', 'cd', 'tl'
                  , 'k3', 'm3', 'amg', 'v12', 'z2', 'tr', 'tg', 'ntm', 'kt', 'sb'];
        
        item    = letters[Math.floor(Math.random()*letters.length)];
        teller=0;
        document.getElementById('tijd').innerHTML = "TIME : 4" ;
        tijdOver=4;
            
            
        $("#pageSpel").fadeIn(2000);
        document.getElementById('pageSpel').style.backgroundImage="url(img/backgroundlvl2.png)";
        $("#pageLevel").fadeOut(0);
        audiolvl.play();
        audioplay.pause();
        
        timer1 = setInterval(seconden1, 1000);
            
            
            setTimeout(function()
            {
               
                $("#boxApp").fadeIn(3000);
                $("#antwoord").fadeIn(3000);
                $("#WilGet").html(item);
                $("#WilGet").fadeIn(350);
                $("#WilGet").animate({fontSize: "80px"}, 300);
                
                
            }, 500);  
        
            setTimeout(function()
            {
               $("#WilGet").fadeOut(350);
                
            }, 1000); 
        
        lvlDisMoi = 2;
        
        
    
    });
    
    
    
    
    
    /**************************************** Timer  **********************************************/ 
    
    function seconden1()
    {
        tijdOver -= 1;
        
        document.getElementById('tijd').innerHTML = "TIME : " + tijdOver;
        
        if(tijdOver == 0)
        {
            spel2();
            
            if (teller == 10)
            {
                $("#pageSpel").fadeOut(0);
                clearInterval(timer1);
                point();
            }
        }
    }
        
            
    
    
    
/**************************************** Spel Functie  **********************************************/ 
    
            function spel2()
            {
                 if (item != "amigo")
                {
                    var resultaat = document.getElementById('inputAnt').value;
                    teller++;
                    
                    
                    document.getElementById('count').innerHTML = teller + " /10";
                    tijdOver = 4;
                    
                    
                    
                    if (item == resultaat)
                    {
                        $("#feedback").text("Good!");
                        $("#feedback").css('color', 'darkgreen');
                        audioGood.play();
                        score++;
                    }

                    else
                    {
                        $("#feedback").text("BAD !");
                        $("#feedback").css('color', 'darkred');
                        audioBad.play();
                    }
            
                    
                    setTimeout(function() 
                    {
                        item    = letters[Math.floor(Math.random()*letters.length)];
                        $("#feedback").text("");
                        $("#WilGet").html(item);
                        $("#WilGet").fadeIn(350);
                        $("#inputAnt").val('');
                        document.getElementById('inputAnt').type = 'text';
                    }, 500);
            
                    setTimeout(function() 
                    {
                        $("#WilGet").fadeOut(350);  
                    }, 1000);
                }
            
                if (teller == 10)
                {
                    $("#pageSpel").fadeOut(0);
                    clearInterval(timer1);
                    point();
                    
                }
                
            }
    
    
    
    
    /**************************************** LEVEL3 **********************************************/
    
    
    $("#lvl3").click(function()
    { 
        
        
        words = ['hallo', 'welkom', 'straat', 'brackets', 'javascript', 'w3school', 'mobile', 'jquery', 'css', 'html', 
                   'database', 'information', ' internet', 'plata', 'plomo', 'gringo', 'apps', 'software', 'network', 'systeem', 
                   'netacad', 'oracle', 'apex', 'wifi', 'bluetooth', 'development', 'odisee', 'databank', 'info', 'background'
                  , 'body', 'head', 'div', 'dames', 'heren', 'docent', 'student', 'ouders', 'landscape', 'babe'];
        
        item3    = words[Math.floor(Math.random()*words.length)];
        teller=0;
        document.getElementById('tijd').innerHTML = "TIME : 4" ;
        tijdOver=4;
            
            
        $("#pageSpel").fadeIn(2000);
        document.getElementById('pageSpel').style.backgroundImage="url(img/backgroundlvl3.jpg)";
        $("#pageLevel").fadeOut(0);
        audiolvl.play();
        audioplay.pause();
        
        timer3 = setInterval(seconden3, 1000);
            
            
            setTimeout(function()
            {
                $("#boxApp").fadeIn(3000);
                $("#antwoord").fadeIn(3000);
                $("#WilGet").html(item3);
                $("#WilGet").fadeIn(350);
                if($(window).width() < 700)
                {
                    $("#WilGet").animate({fontSize: "50px"}, 300);
                }
                els
                {
                    $("#WilGet").animate({fontSize: "80px"}, 300); 
                }
                
                
            }, 500);  
        
            setTimeout(function()
            {
               $("#WilGet").fadeOut(350);
                
            }, 1000); 
        
        lvlDisMoi = 3;
        
        
    
    });
    
    
    
    
    
    /**************************************** Timer  **********************************************/ 
    
    function seconden3()
    {
        tijdOver -= 1;
        
        document.getElementById('tijd').innerHTML = "TIME : " + tijdOver;
        
        if(tijdOver == 0)
        {
            spel3();
            
            if (teller == 10)
            {
                $("#pageSpel").fadeOut(0);
                clearInterval(timer3);
                point();
            }
        }
    }
        
            
    
    
    
/**************************************** Spel Functie  **********************************************/ 
    
            function spel3()
            {
                 if (item3 != "amigo")
                {
                    var resultaat = document.getElementById('inputAnt').value;
                    
                    teller++;
                    
                    document.getElementById('count').innerHTML = teller + " /10";
                    tijdOver = 4;
                    
                    
                    
                    if (item3 == resultaat)
                    {
                        $("#feedback").text("Good!");
                        $("#feedback").css('color', 'darkgreen');
                        audioGood.play();
                        score++;
                    }

                    else
                    {
                        $("#feedback").text("BAD !");
                        $("#feedback").css('color', 'darkred');
                        audioBad.play();
                    }
            
                    
                    setTimeout(function() 
                    {
                        item3    = words[Math.floor(Math.random()*words.length)];
                        $("#feedback").text("");
                        $("#WilGet").html(item3);
                        $("#WilGet").fadeIn(350);
                        $("#inputAnt").val('');
                        document.getElementById('inputAnt').type = 'text';
                    }, 500);
            
                    setTimeout(function() 
                    {
                        $("#WilGet").fadeOut(350);  
                    }, 1000);
                }
            
                if (teller == 10)
                {
                    $("#pageSpel").fadeOut(0);
                    clearInterval(timer3);
                    point();
                    
                }
                
            }
    
    


});
 