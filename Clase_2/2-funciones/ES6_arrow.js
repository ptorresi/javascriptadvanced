//ES5

var sumar = function(a, b){
    console.log(a, b);
    return a + b;
}


//ES6

const sumarx = (a,b) => {
    console.log(a, b);
    return a + b;
}

//-----------------------------------------------------

//ES 5

var restar = function(a, b){
    return a-b;
}

//ES6

const restarx = (a,b)=> a-b;

//--------------------------------------------------

//ES 5

var duplicar = function(m){
    return m*2;
}

//ES 6
const duplicarx = m => m*2;

//---------------------------------------------------
//ES 5
var getData = function(){
    return { nombre: 'Juliana', edad: 36}
}

//ES 6
const getDataX = () => ({ name: 'Juliana', age: 36})