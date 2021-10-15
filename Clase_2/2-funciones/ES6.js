//ES5
var aux = 200;
//...
var aux = 8;  //Se interpreta solo como una asignacion de valor y es un problema, la variable se pierde

console.log(window.aux) //Las variables var se meten dentro de window que representa al navegador

var IMPUESTO = 21;  //Se utilizaba esta convencion para identificar una constante, pero en realidad era variable


//ES6 --------------------------------------------------------------------

let cant = 9; //A diferencia de Var permite la reasignacion de valor pero no la redeclaración.

console.log(window.cant) //lo muestra como indefinido

const RADIO = 36; //no permite la variacion ni la redefinicion


//Primero se utilizan las constantes
//Segundo se utiliza let
//El var se evita


const h1 = document.querySelector("h1");
h1.textContent = "ES6 - Variables";
h1.style.backgroundColor = "lime";
h1.style.padding="10px";

//Cuando una constante guarda una referencia por convencion se identifica en minuscula
//Cuando guarda un primitivo se nombra en MAYUSCULA
console.log(h1);
