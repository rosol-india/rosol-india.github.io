    var hclick=0;
    var counter = 0;
var interval;
var t = 0;
    /*function screen_check() {
        var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

        if(w = 500) {
           changep();
        } else if(w > 500 && w <=850) {
            //max-width 850px
            // actions here...
            orange();
        } else {
            // 850px and beyond
            // actions here...
            green();
        }

    }*/
    
    /*
    use this to add background change effect--->
            background-image: url("/img/sl111.jpg");
        background-size: cover;

          -webkit-transition: background-image 0.6s linear;
       transition: background-image 0.6s linear;
    */
window.onload = function() {changep()
}
/*
function clicka()
{        
    clearInterval(interval);
    document.getElementById("home_s").style.backgroundImage="url(/img/a.jpg)";
    document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Sun is simply a one big battery for us.</center></span></center>';
       document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('c-butna').style.display='inline-block';
       document.getElementById('c-butnb').style.display='inline-block';
       document.getElementById('c-butnc').style.display='inline-block';
       document.getElementById('c-butnd').style.display='inline-block';
       document.getElementById('c-butne').style.display='inline-block';
      
}
function clickb()
{        
    clearInterval(interval);
    document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Let\'s make the world a better place.</center></span></center>';
     document.getElementById("home_s").style.backgroundImage="url(/img/c.jpg)";
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='black';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
        document.getElementById('c-butna').style.display='inline-block';
       document.getElementById('c-butnb').style.display='inline-block';
       document.getElementById('c-butnc').style.display='inline-block';
       document.getElementById('c-butnd').style.display='inline-block';
       document.getElementById('c-butne').style.display='inline-block';
}
function clickc()
{        
    clearInterval(interval);
    document.getElementById("home_s").style.backgroundImage="url(/img/d.jpg)";
    document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Our bright ideas come from the sun.</center></span></center>';
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='black';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
        document.getElementById('c-butna').style.display='inline-block';
       document.getElementById('c-butnb').style.display='inline-block';
       document.getElementById('c-butnc').style.display='inline-block';
       document.getElementById('c-butnd').style.display='inline-block';
       document.getElementById('c-butne').style.display='inline-block';
}
function clickd()
{        
    clearInterval(interval);
    document.getElementById("home_s").style.backgroundImage="url(/img/e.jpg)";
     document.getElementById('p_content').innerHTML ='<center><span id="quote"><center>When there’s a huge solar energy spill, it’s just called a ‘nice day’</center></span></center>';
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='black';
       document.getElementById('c-butne').style.backgroundColor='white';
        document.getElementById('c-butna').style.display='inline-block';
       document.getElementById('c-butnb').style.display='inline-block';
       document.getElementById('c-butnc').style.display='inline-block';
       document.getElementById('c-butnd').style.display='inline-block';
       document.getElementById('c-butne').style.display='inline-block';
}
function clicke()
{        
    clearInterval(interval);
    document.getElementById("home_s").style.backgroundImage="url(/img/f.jpg)";
     document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Solar energy, clean energy for a better tomorrow</center></span></center>';
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='black';
        document.getElementById('c-butna').style.display='inline-block';
       document.getElementById('c-butnb').style.display='inline-block';
       document.getElementById('c-butnc').style.display='inline-block';
       document.getElementById('c-butnd').style.display='inline-block';
       document.getElementById('c-butne').style.display='inline-block';
}
*/
function changep()
{      
       if(counter==0){
        document.getElementById("home_s").style.backgroundImage="url(/img/a.jpg)";
        document.getElementById('p_content').innerHTML = '   <span id="chead">Rays of <span id="hsun"> Sun </span> Oriented Light</span><br><span id="ibout">A Solar Powered Products &amp  Solutions Company<span style="color:#5FAD56"> .</span></span>';
      
       counter+=1;
   }
       interval = setInterval(function() {
      if(counter == 0)
      { 
        counter+=1;
        //here add the background image of slide 1
        document.getElementById("home_s").style.backgroundImage="url(/img/b.jpg)";
         document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Solar, the energy of the future.</center></span></center>';
      }
        else if(counter == 1){
          counter+=1;
          //here add the background image of slide 2
          document.getElementById("home_s").style.backgroundImage="url(/img/c.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Electricity bills are increasing by 30% every year as for sunshine its free.</center></span></center>';

        }
         else if(counter == 2){
          counter+=1;
          //here add the background image of slide 3
          document.getElementById("home_s").style.backgroundImage="url(/img/d.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Sun is simply  one big battery for us.</center></span></center>';
 
        }
         else if(counter == 3){
          counter+=1;
          //here add the background image of slide 4
          document.getElementById("home_s").style.backgroundImage="url(/img/e.jpg)";
          document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>You can \' t buy Happiness but you can buy Solar Panels and that \' s pretty close. </center></span></center>';
 
        }
         else if(counter == 4){
          counter+=1;
          counter%=5;
          //here add the background image of slide 5
          document.getElementById("home_s").style.backgroundImage="url(/img/f.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Solar energy, clean energy for a better tomorrow</center></span></center>';
}
}, 8000);
}