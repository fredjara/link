document.addEventListener('DOMContentLoaded', (event) => {
    let TextoinputNombre = document.getElementById("inputNombre");
    let TextoinputRutRepresentante = document.getElementById("inputRutRepresentante");
    let TextoinputCorreo = document.getElementById("inputCorreo");
    const botonenvio = document.getElementById("submitBtn");

    // Verificar si todos los campos no están vacíos
    if (TextoinputNombre.value.trim() === '') {
        botonenvio.disabled = false;
        botonenvio.style.backgroundColor = 'gray';
    } else {
        botonenvio.disabled = true;
        botonenvio.style.backgroundColor = 'blue';
    }

});



function validateForm() {
    let TextoinputNombre = document.getElementById("inputNombre");
    let TextoinputRutRepresentante = document.getElementById("inputRutRepresentante");
    let TextoinputCorreo = document.getElementById("inputCorreo");
    const botonenvio = document.getElementById("submitBtn");

    // Verificar si todos los campos no están vacíos
    if (TextoinputNombre.value.trim() === '' || TextoinputRutRepresentante.value.trim() === '' || TextoinputCorreo.value.trim() === '' ) {
        botonenvio.disabled = true;
        botonenvio.style.backgroundColor = 'gray';
    } else {
        
        botonenvio.disabled = false;
        botonenvio.style.backgroundColor = '';
    }
}

