function mostrarMas () {
    let hobbiesContainer = document.getElementById ("hobbies-container")
    let botonOcultar = document.getElementById ("btn-conocer-mas")
    hobbiesContainer.style.display = "block"
    botonOcultar.style.display = "none"
}

let btnConocerMas = document.getElementById ("btn-conocer-mas")
btnConocerMas.addEventListener ('click', mostrarMas)