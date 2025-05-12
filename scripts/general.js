// Desplegar y cerrar Menu para dispositivos de pantalla pequeña.
document.getElementById("menu").addEventListener("click",function(){
    document.getElementById("navega").classList.toggle("mostrar");
});

// Cambiar fecha del Copyright
document.querySelector("#current-year").innerHTML = new Date().getFullYear();