var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function randomHexColors(element) {  
  var r = hexCode();
  document.getElementById(element).style.background = r;
  
  document.getElementById(element).innerHTML = r; //opional
  // instead use console to get the hex color value
  console.log(r);
}

function hexCode() {
  var hex = "#";
  
  for(var i=0; i<6; i++) {
  hex += arr[Math.floor(Math.random()* arr.length)]; 
  }
  
  return hex;
}
