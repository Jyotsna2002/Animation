var m=0;
var y;
var a=0;
var b;
function start1() 
{ 
    y=setInterval(move,25);
    function move()
   { 
       if(m==1000)
       {
           clearInterval(x);
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
           clearInterval(r);
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

function run()
{
    b=setInterval(move,25);
    function move()
   { 
     var c;
     a+=5;
     c=document.getElementById(".sky");
     c.style.marginLeft=a+'px';    
   }

}