//sweetalert

swal.fire({
    title: "Bienvenido!",
    text: "Nuestros productos",
    icon: 'info',
    confirmButtonText: 'seleccionar',
    padding: 0,
    timer:5000,

});



//formulario

let formulario = document.getElementById ('registro');
formulario.addEventListener ("submit", validarFormulario);

function validarFormulario(event){
    event.preventDefault ();
    console.log("Formulario ingresado");
}


