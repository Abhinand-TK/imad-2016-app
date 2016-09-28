console.log('Loaded!');


var element = document.getElementById('text');
element.innerHTML='Whatever that was never said was never ever enough! ';

var img = document.getElementById('neel');
var marginLeft =0;

function moveright()
{
  marginLeft=marginLeft +3;
  img.style.marginLeft = marginLeft+'px';
}

img.onclick=function()
{
  var interval = setInterval(moveright,20);  
    
};