 "used strict";





var x=0;
var y=0;


document.write('<h1> Dambord </h1>');
document.write('<div class="dambord">');
            
            for(y=0; y<4; y++)
            {
                
                for(x=0; x<4; x++)
                {
                document.write("<p class = damAqua></p>");
                document.write("<p class = damGroen></p>");
                }
                
                for(x=0; x<4; x++)
                {
                document.write("<p class = damGroen></p>");
                    document.write("<p class = damAqua></p>");
                }
                
            }

document.write('</div>');


