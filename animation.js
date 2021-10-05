//window.alert('Hello! Animation is about to begin...');
var m=0;
var y;
function start1() 
{ 
    y=setInterval(move,25);
    function move()
   { 
       if(m==1000)
       {
           m=-130;
       }
     var x;
     m+=5;
     x=document.getElementById("img2");
     x.style.marginLeft=m+'px';    
   }
}
function stop1()
{
    clearInterval(y);
}
n=0;
var q;
function start()
{
    q=setInterval(move,25);
    function move()
   { 
       if(n==1000)
       {
           n=-130;
       }
     var r;
     n+=5;
     r=document.getElementById("img1");
     r.style.marginRight=n+'px';    
   }
}
function stop()
{
    clearInterval(q);
}

   var b=setInterval(move,25);
   a=0;
    function move()
   { 
    if(a==1000)
    {
        a=-130;
    }
     a+=5;
     var c=document.getElementById("brd1");
     c.style.marginLeft=a+'px';    
   }
   var g=setInterval(run,5);
   h=0;
    function run()
   { 
    if(h==1000)
    {
        h=-130;
    }
     h++;
     var g=document.getElementById("brd2");
     g.style.marginRight=h+'px';    
   }
   var bal=setInterval(fly,10);
   mar=0;
    function fly()
   { 
    if(mar==-400)
    {
        mar=0;
    }
     mar--;
     var bal=document.getElementById("ballon");
     bal.style.marginTop=mar+'px';    
     bal.style.marginRight=mar+'px'; 
   }
   var boy=setInterval(speed,8);
   skate=0;
    function speed()
   { 
    if(skate==1000)
    {
        skate=-130;
    }
     skate++;
     var boy=document.getElementById("boy");
     boy.style.marginRight=skate+'px';    
   }