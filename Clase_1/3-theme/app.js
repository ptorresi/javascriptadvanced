var h1 = document.getElementById("titulo"); // HTMLElement o null
console.log(h1);

// getElementsByName getElementsByClassName
var items = document.getElementsByTagName("li"); // [ul] [li,li] []
console.log(items);

for(var i=0; i<items.length; i++){
  items[i].style.color = "red";
}

//-----------------------------------
//var titulo = document.querySelector("#titulo"); // HTMLElement o null
//var titulo = document.querySelector("h1"); 
var titulo = document.querySelector(".principal"); // "div.box>p.selected"
titulo.style.color = "red";

var lis = document.querySelectorAll("li.lindo"); // [ul] [li,li] []
console.log(lis);

for(var i=0; i<lis.length; i++){
  lis[i].style.background = "orange";
}