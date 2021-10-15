var paises = [
    {code: "ar", name: "Argentina"},
    {code: "br", name: "Brasil"},
    {code: "cl", name: "Chile"},
]

//'Creo un objeto'
var selector =  document.getElementById("cboPais");
var fragmento = document.createDocumentFragment(); //Es una etiqueta auxiliar

//Crear las options basadas en el array
/*
for(var i=0; i<paises.length; i++){
    var pais = paises[i];
    var opcion = document.createElement("option");
    opcion.textContent = pais.name;
    opcion.value=pais.code;
//Se agrega como hijo del selector
    selector.appendChild(opcion); //Cada vez que se hace un appendChild refrezca la pantalla.

    
}
*/
//nunca debo usar appendchild o manipulaciones dentro de un bucle.



//Segunda opcion sin hacer el appendchild dentro del bucle.
for(var i=0; i<paises.length; i++){
    var pais = paises[i];
    var opcion = document.createElement("option");
    opcion.textContent = pais.name;
    opcion.value=pais.code;
//Se agrega como hijo del fragmento
//El fragmento no es parte del DOM
    fragmento.appendChild(opcion);
 
}
selector.appendChild(fragmento); //fragmento transfiere sus hijos al selector
//Se puede tener mas de un fragmento
