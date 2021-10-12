
var titulo = document.getElementsByTagName('h1');
titulo = titulo[0];

var parrafo = document.getElementsByTagName('p');
parrafo = parrafo[0]; 


function CambiarColorTheme(boton){
    if(boton.innerText == 'Elegir tema Dark'){
        document.body.classList.add("dark");
        boton.innerText = 'Elegir temaLight';
    }else{
        document.body.classList.remove("dark");
               
        boton.innerText = 'Elegir tema Dark';
    }
}