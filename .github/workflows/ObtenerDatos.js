// Obtener la ID desde la URL
        

document.addEventListener('DOMContentLoaded', (event) => {
            
    const urlParams = new URLSearchParams(window.location.search);

    for (let url of urlParams)
    {console.log(url)}

    const id = urlParams.get('id');


    
    //Realizar post con la id a power automate
    fetch('https://prod2-21.brazilsouth.logic.azure.com:443/workflows/fe566f66ab6d4972b77973c15614f640/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EEGSpe-K-npO5xUDkc5ZOXOHFc9Wp_dy7aP71HXymaE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identificador: id })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('inputOportunidad').value = data.idOportunidad;
        document.getElementById('inputValorMandatoA').value = data.valorA;
        document.getElementById('inputValorMandatoV').value = data.valorV;
        document.getElementById('inputDireccion').value = data.Direccion;
        document.getElementById('inputComuna').value = data.Comuna;
        document.getElementById('inputRegion').value = data.Region;
        document.getElementById('inputRol').value = data.Rol;
        let ValorTipoPropiedad = data.tipoPropiedad;
        console.log(ValorTipoPropiedad);
        switch (ValorTipoPropiedad){
            case "100000008":
            ValorTipoPropiedad = "Datacenter";
            break;
            case "100000014":
            ValorTipoPropiedad = "Build to Suit";
            break;
            case "100000002":
            ValorTipoPropiedad = "Fotovoltaico";
            break;
            case "100000007":
            ValorTipoPropiedad = "Eólico";
            break;
            case "100000001":
            ValorTipoPropiedad = "Hotel";
            break;
            case "100000000":
            ValorTipoPropiedad = "Multifamily";
            break;
            case "282270000":
            ValorTipoPropiedad = "Departamento";
            break;
            case "766640000":
            ValorTipoPropiedad = "Oficina";
            break;
            case "766640002":
            ValorTipoPropiedad = "Terreno";
            break;
            case "766640005":
            ValorTipoPropiedad = "Local Comercial";
            break;
            case "766640006":
            ValorTipoPropiedad = "Bodega";
            break;
            case "766640007":
            ValorTipoPropiedad = "Estacionamiento";
            break;
            case "766640008":
            ValorTipoPropiedad = "Industrial";
            break;
            case "766640009":
            ValorTipoPropiedad = "Agrícola";
            break;
            case "100000003":
            ValorTipoPropiedad = "Bodega Industrial";
            break;
            case "100000004":
            ValorTipoPropiedad = "Local - Individual";
            break;
            case "100000005":
            ValorTipoPropiedad = "Local - Placa Comercial";
            break;
            case "100000006":
            ValorTipoPropiedad = "Local Otro";
            break;
            case "100000009":
            ValorTipoPropiedad = "Oficina - Casa";
            break;
            case "100000010":
            ValorTipoPropiedad = "Oficina Edificio";
            break;
            case "100000011":
            ValorTipoPropiedad = "Otros Bienes";
            break;
            case "100000012":
            ValorTipoPropiedad = "Parcela Agroresidencial";
            break;
            case "100000013":
            ValorTipoPropiedad = "Parque Industrial";
            break;
            case "100000016":
            ValorTipoPropiedad = "Predio Agrícola";
            break;
            case "100000017":
            ValorTipoPropiedad = "Predio Agrícola con Explotación";
            break;
            case "100000018":
            ValorTipoPropiedad = "Predio Agricola Sin Explotación";
            break;
            case "100000021":
            ValorTipoPropiedad = "Terreno con Potencial Comercial";
            break;
            case "100000022":
            ValorTipoPropiedad = "Terreno con Potencial Inmobiliario";
            break;
            case "100000023":
            ValorTipoPropiedad = "Terreno Industrial";
            break;
            case "100000024":
            ValorTipoPropiedad = "Terreno Otro";
            break;

        }    
        console.log(ValorTipoPropiedad);

        document.getElementById('inputTipoPropiedad').value = ValorTipoPropiedad;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
});