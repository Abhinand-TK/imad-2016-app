console.log('Loaded!');


var element = document.getElementById('text');
element.innerHTML='Whatever that was never said was never ever enough! ';

var img = document.getElementById('neel');
var marginleft =0;

function moveright()
{
  marginLeft=marginLeft +10;
  img.style.marginLeft+'px';
}

img.onclick=function()
{
  var interval = setInterval(moveright,100);  
    
};