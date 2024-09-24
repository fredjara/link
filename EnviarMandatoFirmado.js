

let boton = document.getElementById("submitBtn")

function mostrarAlerta(texto,tipoAlerta) {
    document.getElementById('AlertaDeCierre').textContent = texto;
    if(tipoAlerta=='error'){document.getElementById('AlertaDeCierre').style.backgroundColor = 'Red'}
    var alerta = document.getElementById('AlertaDeCierre');
    alerta.style.display = 'block'; // Mostrar el mensaje de alerta

    // Ocultar después de 2 segundos (2000 milisegundos)
    setTimeout(function() {
      alerta.style.display = 'none';
    }, 2000);
  }
function finalizarEnvio(){
    let textoAlerta = 'Se ha finalizado correctamente la firma del documento'
    mostrarAlerta(textoAlerta)
    setTimeout(function() {
        
        window.location.href = 'FirmaFinalizada.html';
   
    }, 2000);
    
}


    
function enviarMandato() {
    const urlParams = new URLSearchParams(window.location.search);

    for (let url of urlParams)
    {console.log(url)}

    const identificador = urlParams.get('id');
    let TextoinputNombre = document.getElementById("inputNombre");


    const radioButtons = document.querySelectorAll('input[name="options"]');
    let isChecked = false;

    
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    if (isChecked == false ) {
        var nombreError = document.getElementById("NombreError");
        let textoAlerta = 'Falta seleccionar si autoriza instalacion de letrero';
        let tipoAlerta = 'error';
        mostrarAlerta(textoAlerta,tipoAlerta)
    }

    if (TextoinputNombre.value.trim() == '') {

        var nombreError = document.getElementById("NombreError");
        let textoAlerta = 'Falta llenar Nombre de representante';
        let tipoAlerta = 'error';
        mostrarAlerta(textoAlerta,tipoAlerta)
        nombreError.style.display = "inline";  // Muestra el mensaje de error

        
        return;

    } 

    var rutInput = document.getElementById("inputRutRepresentante").value;
    var rutError = document.getElementById("RutError");
    if (!validarRUT(rutInput)) {
        
        let textoAlerta = 'Falta llenar Rut representante';
        let tipoAlerta = 'error';
        mostrarAlerta(textoAlerta,tipoAlerta)
        rutError.style.display = "inline";  // Muestra el mensaje de error
       
        
        return;
    }  
     
    var emailInput = document.getElementById("inputCorreo").value;
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        
        let textoAlerta = 'Falta llenar correo representante';
        let tipoAlerta = 'error';
        mostrarAlerta(textoAlerta,tipoAlerta);
        
        
        emailError.style.display = "inline";  // Muestra el mensaje de error
        return;
    } else {
        emailError.style.display = "none"; 
    }
   
    

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
    /* toDataURL();*/
    let imagenFirma = $canvas.toDataURL();
    let imagenEnviada = $canvas.toDataURL().substring(22);
    let letrero = "Si";
    let BASE64 = "iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGhJREFUeF7t1IEJADAMAsF2/6EtdIuHywRyBu+2HUeAAIGAwDVYgZZEJEDgCxgsj0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIg8ACBlFZdWYR+vQAAAABJRU5ErkJggg==";
    if(imagenEnviada==BASE64){
        let textoAlerta = 'Falta firmar Documento';
        let tipoAlerta = 'error';
        mostrarAlerta(textoAlerta,tipoAlerta)
        return;
    }
    
    console.log(imagenFirma);


    function encodeTwoStringsToBase64(inputOportunidad1, rut2) {

        let encodedString1 = btoa(inputOportunidad1);
        let encodedString2 = btoa(rut2);
      
        return encodedString1 + encodedString2;
    }
    
    
    let encodedResult = encodeTwoStringsToBase64(inputOportunidad, rut);
    
    let cod1 = '&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mFryhe1LEXTxEXUr9Zi3jwlhlr7vaSO-JibjF_fy0fo';//cod1
    let cod = 'paths/invoke?api-version=2016-06-01'+cod1;
    //Link de prueba https://prod-24.brazilsouth.logic.azure.com:443/workflows/ac7a169072be42d492dd50ce7782169d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=A4_p3g43gCxVWSx0sJPWtJFoNqan-48aNUeVwWX_SrI
    //fetch('https://prod-24.brazilsouth.logic.azure.com:443/workflows/ac7a169072be42d492dd50ce7782169d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=A4_p3g43gCxVWSx0sJPWtJFoNqan-48aNUeVwWX_SrI', {
    
    //Link de productivo
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
            imagenFirma: imagenFirma,
            imagenEnviada:imagenEnviada,
            rutR:rutR,
            rut:rut,
            nombre:nombre,
            razonSocial:razonSocial,
            letrero:letrero,
            identificador:identificador
        
    
            
         })
        
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Verificar si el contenido de la respuesta no está vacío
        return response.text().then(text => {
            // Si el texto no está vacío, tratar de convertirlo a JSON
            return text ? JSON.parse(text) : {};
        });
    })
    .then(data => {
        console.error('Error:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    finalizarEnvio()
    
};

boton.addEventListener('click', enviarMandato)