function toggleDarkMode() {
    // Alterna la clase 'dark-mode' en el body
    document.body.classList.toggle('dark-mode');


    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.classList.toggle('dark-mode');
    });
}


// Función que se ejecuta cuando se cambia el estado del switch
function cambiarTexto() {
    // Obtiene el elemento checkbox (switch)
    var switchElement = document.getElementById("miSwitch");

    
}