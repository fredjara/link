

let boton = document.getElementById("submitBtn");


    
function enviarMandato() {
    
    let inputTipo = document.getElementById('inputTipo').value;
    let inputDirección = document.getElementById('inputDirección').value;
    let inputPrecio = document.getElementById('inputPrecio').value;
    let inputRol = document.getElementById('inputRol').value;
    let inputTipoPropiedad = document.getElementById('inputTipoPropiedad').value;

    let imagenFirma = $canvas.toDataURL();
    let imagenEnviada = imagenFirma.substring(22, 10000);
    let letrero = "si";

    let jsonvariable = {
        inputTipo: inputTipo,
        inputDirección: inputDirección,
        inputPrecio: inputPrecio,
        inputRol: inputRol,
        inputTipoPropiedad: inputTipoPropiedad,
        imagenEnviada:imagenEnviada


        
    };
    console.log(jsonvariable);

    function encodeTwoStringsToBase64(inputOportunidad1, rut2) {

        let encodedString1 = btoa(inputOportunidad1);
        let encodedString2 = btoa(rut2);
      
        return encodedString1 + encodedString2;
    }
    


    let encodedResult = encodeTwoStringsToBase64(inputOportunidad, rut);
    fetch('https://prod2-30.brazilsouth.logic.azure.com:443/workflows/21d6188c15b840278653cc2da5adc877/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jb1vB14UmpQ74sreYr8UK_8fGJUZCfmj1qLjpMrvn2A', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': encodedResult
        },
        body: JSON.stringify({ 
            inputTipo: inputTipo,
            inputDirección: inputDirección,
            inputPrecio: inputPrecio,
            inputRol: inputRol,
            inputTipoPropiedad: inputTipoPropiedad,
            imagenEnviada:imagenEnviada
    
            
         })
        
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
       
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
};

boton.addEventListener('click', enviarMandato)