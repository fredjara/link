

let boton = document.getElementById("submitBtn");


    
function enviarMandato() {
    
    let inputTipo = document.getElementById('inputTipo').value;
    let inputDireccion = document.getElementById('inputDirección').value;
    let inputPrecioV = document.getElementById('inputPrecioV').value;
    let inputPrecioA = document.getElementById('inputPrecioA').value;
    let inputSuperficie = document.getElementById('inputSuperficie').value;
    let inputTipoOportunidad = document.getElementById('inputTipoOportunidad').value;

    let imagenFirma = $canvas.toDataURL();
    let imagenEnviada = imagenFirma.substring(22, 10000);



    

    fetch('https://prod-30.brazilsouth.logic.azure.com:443/workflows/21d6188c15b840278653cc2da5adc877/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jb1vB14UmpQ74sreYr8UK_8fGJUZCfmj1qLjpMrvn2A', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            inputTipo: inputTipo,
            inputDireccion: inputDireccion,
            inputPrecioV: inputPrecioV,
            inputPrecioA: inputPrecioA,
            inputSuperficie: inputSuperficie,
            inputTipoOportunidad: inputTipoOportunidad,
            imagenFirma: imagenFirma,
            imagenEnviada: imagenEnviada
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //window.location.href = 'FirmaFinalizada.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

boton.addEventListener('click', enviarMandato);