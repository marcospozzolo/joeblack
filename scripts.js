let hobbiesContainer = document.getElementById ("hobbies-container")
hobbiesContainer.style.display = "none";

function mostrarMas () {
    hobbiesContainer.style.display = "grid"
}

let btnConocerMas = document.getElementById ("btn-conocer-mas")
btnConocerMas.addEventListener ('click', mostrarMas)