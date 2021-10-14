var body = document.getElementsByTagName('body')[0];


//punto 1
var nrosPrimos = ['uno', 'tres', 'cinco', 'siete', 'once','trece', 'diecisiete', 'diecinueve', 'veintitres', 'treinta y uno'];

var ul = document.createElement('ul');
let fr = document.createDocumentFragment();

for(i=0; i<10; i++){
    let li = document.createElement("li")
    li.innerText = nrosPrimos[i];
    fr.appendChild(li);
}
ul.appendChild(fr);

body.appendChild(ul);

//punto 2
function MostrarMovil(){
    let movil = document.getElementById('movil');
    if(windows.outerWidth > 500){
        movil.className="movil";
    }else{
        movil.className="";
    }
}

