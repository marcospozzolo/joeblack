function mostrarMas () {
    let hobbiesContainer = document.getElementById ("hobbies-container")
    hobbiesContainer.style.display = "block"
}

let btnConocerMas = document.getElementById ("btn-conocer-mas")
btnConocerMas.addEventListener ('click', mostrarMas)