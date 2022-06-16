
 
let formularioHeader = document.querySelector("form")
let inputFormulario = document.querySelector(".busqueda")

formularioHeader.addEventListener("submit", function(evento) {
    evento.preventDefault()
    if (inputFormulario.value == "") {
        console.log(formularioHeader)
    } else {
        alert("Son 3 caracteres como minimo")
    }
})

