

let boton = document.getElementById("submitBtn");


    
function enviarMandato() {
    const urlParams = new URLSearchParams(window.location.search);

    for (let url of urlParams)
    {console.log(url)}

    const identificador = urlParams.get('id');
    let TextoinputNombre = document.getElementById("inputNombre");
    let TextoinputRutRepresentante = document.getElementById("inputRutRepresentante");
    let TextoinputCorreo = document.getElementById("inputCorreo");

    const radioButtons = document.querySelectorAll('input[name="options"]');
    let isChecked = false;

    
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });
    if (TextoinputNombre.value.trim() === '' || TextoinputRutRepresentante.value.trim() === '' || TextoinputCorreo.value.trim() === '') {
        alert("Faltan Campos obligatorios, recuerde llenar los campos que contienen (*)");
        return;
    }
    window.location.href = 'FirmaFinalizada.html';
    let inputOportunidad = document.getElementById('inputOportunidad').value;
    let valorMandatoA = document.getElementById('inputValorMandatoA').value;
    let valorMandatoV = document.getElementById('inputValorMandatoV').value;
    let valorDireccion = document.getElementById('inputDireccion').value;
    let valorComuna = document.getElementById('inputComuna').value;
    let valorRegion = document.getElementById('inputRegion').value;
    let valorRol = document.getElementById('inputRol').value;
    let rut = document.getElementById('inputRut').value;
    let razonSocial = document.getElementById('inputRazonS').value;
    let nombre = document.getElementById('inputNombre').value;
    let rutR = document.getElementById('inputRutRepresentante').value;
    let correo = document.getElementById('inputCorreo').value;
    let valorPropiedad = document.getElementById('inputTipoPropiedad').value;  
    let imagenFirma = $canvas.toDataURL();
    let imagenEnviada = imagenFirma.substring(22, 10000);
    let letrero = "Si";

    let jsonvariable = {
        inputOportunidad: inputOportunidad,
        valorMandatoA: valorMandatoA,
        valorMandatoV: valorMandatoV,
        valorDireccion: valorDireccion,
        valorComuna: valorComuna,
        valorRegion: valorRegion,
        valorRol: valorRol,
        valorPropiedad: valorPropiedad,
        imagenEnviada: imagenEnviada,
        letrero:letrero,

        
    };
    console.log(jsonvariable);

    

    function encodeTwoStringsToBase64(inputOportunidad1, rut2) {

        let encodedString1 = btoa(inputOportunidad1);
        let encodedString2 = btoa(rut2);
      
        return encodedString1 + encodedString2;
    }
    
    // Ejemplo de uso

    let encodedResult = encodeTwoStringsToBase64(inputOportunidad, rut);
    let cod1 = '&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mFryhe1LEXTxEXUr9Zi3jwlhlr7vaSO-JibjF_fy0fo';//cod1
    let cod = 'paths/invoke?api-version=2016-06-01'+cod1;
    fetch('https://prod2-04.brazilsouth.logic.azure.com:443/workflows/db511920e0de4bbfb7acf240f0bc33fa/triggers/manual/' + cod, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': encodedResult
        },
        body: JSON.stringify({ 
            inputOportunidad: inputOportunidad,
            valorA: valorMandatoA,
            valorV: valorMandatoV,
            direccion: valorDireccion,
            comuna: valorComuna,
            region: valorRegion,
            rol: valorRol,
            tipoPropiedad: valorPropiedad,
            correo:correo,
            imagenFirma : imagenFirma,
            imagenEnviada: imagenEnviada,
            rutR:rutR,
            rut:rut,
            nombre:nombre,
            razonSocial:razonSocial,
            letrero:letrero,
            identificador:identificador
    
            
         })
        
    })
    .then(response => response.json())
    .then(data => {
        console.error('Error:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
};

boton.addEventListener('click', enviarMandato)