/* --- Esta función cambia el color de la pantalla al pulsar el botón start --- */

function inicioPantalla(){
    var pantalla = document.getElementsByClassName('pantalla')[0];
    /* -- Primera posición del array para que coja el primer elemento '.pantalla' --*/
    pantalla.style.backgroundColor = "blue";    
}

/* --- Esta función cambia el color de la pantalla al pulsar el botón select --- */

function finalPantalla(){
    var pantalla = document.getElementsByClassName('pantalla')[0];
    /* -- Primera posición del array para que coja el primer elemento '.pantalla' --*/
    pantalla.style.backgroundColor = "#9ca04c";    
}