/*document.addEventListener('DOMContentLoaded', (event) => {
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
*/

/*
function validateForm() {
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let isChecked = false;

    
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    let TextoinputNombre = document.getElementById("inputNombre");
    let TextoinputRutRepresentante = document.getElementById("inputRutRepresentante");
    let TextoinputCorreo = document.getElementById("inputCorreo");
    const botonenvio = document.getElementById("submitBtn");

    // Verificar si todos los campos no están vacíos
    if (TextoinputNombre.value.trim() === '' || TextoinputRutRepresentante.value.trim() === '' || TextoinputCorreo.value.trim() === '' || isChecked == false ) {
        botonenvio.disabled = true;
        botonenvio.style.backgroundColor = 'gray';
    } else {
        
        botonenvio.disabled = false;
        botonenvio.style.backgroundColor = '';
    }
}
*/

function validarRUT(rut) {
    // Eliminar puntos y guiones
    rut = rut.replace(/[.\-]/g, '');

    // Verificar formato básico
    if (!/^[0-9]+[0-9kK]$/.test(rut)) {
        return false;
    }

    // Separar cuerpo y dígito verificador
    var cuerpo = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();

    // Calcular dígito verificador
    var suma = 0;
    var multiplo = 2;

    for (var i = cuerpo.length - 1; i >= 0; i--) {
        suma += multiplo * cuerpo.charAt(i);
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }

    var dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 11) dvEsperado = '0';
    else if (dvEsperado === 10) dvEsperado = 'K';
    else dvEsperado = dvEsperado.toString();

    // Comparar con el dígito verificador proporcionado
    return dv === dvEsperado;
}

document.getElementById("inputRutRepresentante").addEventListener("blur", function() {
    var rutInput = document.getElementById("inputRutRepresentante").value;
    var rutError = document.getElementById("RutError");

    if (!validarRUT(rutInput)) {
        rutError.style.display = "inline";  // Muestra el mensaje de error
    } else {
        rutError.style.display = "none";  // Oculta el mensaje de error
    }
});

function ValidarCampos(){
    var emailInput = document.getElementById("inputCorreo").value;
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let esValido = true;

    //ValidarCorreo
    if (!emailPattern.test(emailInput)) {
        emailError.style.display = "inline";
        esValido = false;  
    } else {
        emailError.style.display = "none"; 
    }
    //ValidarRut
    var rutInput = document.getElementById("inputRutRepresentante").value;
    var rutError = document.getElementById("RutError");

    if (!validarRUT(rutInput)) {
        rutError.style.display = "inline";  // Muestra el mensaje de error
    } else {
        rutError.style.display = "none";  // Oculta el mensaje de error
    }

    //ValidaNombre
}


document.getElementById("inputCorreo").addEventListener("blur", function() {
    var emailInput = document.getElementById("inputCorreo").value;
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        emailError.style.display = "inline";  
    } else {
        emailError.style.display = "none"; 
    }
});

document.getElementById("inputNombre").addEventListener("blur", function() {
    var emailInput = document.getElementById("inputNombre").value;
    var emailError = document.getElementById("NombreError");


    if (emailInput==null || emailInput=="" || emailInput==undefined) {
        emailError.style.display = "inline";  
    } else {
        emailError.style.display = "none"; 
    }
});


