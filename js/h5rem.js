
var baseSize = 100
function setRem () {
  var cw=document.documentElement.clientWidth;
  if(cw>750){cw=750}
  var scale = cw / 750;
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 3)) + 'px';
}
setRem()
window.onresize = function () {
  setRem()
}