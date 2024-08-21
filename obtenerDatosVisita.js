// Obtener la ID desde la URL
        

document.addEventListener('DOMContentLoaded', (event) => {
            
    const urlParams = new URLSearchParams(window.location.search);

    for (let url of urlParams)
    {console.log(url)}

    const id = urlParams.get('id');


    
    //Realizar post con la id a power automate
    fetch('https://prod2-13.brazilsouth.logic.azure.com:443/workflows/00bf95abaa164c049919e6bc9f631cf4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=H-Vlgqj5abrEZmynfAj7RqwP8cWA_8GCsl_MiFZU8MY', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identificador: id })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
        document.getElementById('inputPrecioA').value = data.valorArriendo;
        document.getElementById('inputPrecioV').value = data.valorVenta;
        document.getElementById('inputDirección').value = data.Direccion;
        document.getElementById('inputSuperficie').value = data.SuperficieConstruida;

        var inputA = document.getElementById('inputPrecioA');
        var inputV = document.getElementById('inputPrecioV');
        var textoA = document.getElementById('textoarriendo');
        var TextoV = document.getElementById('textoventa');

        if(data.tipoOportunidad == 282270000){
            
            inputA.style.display = 'none';
            textoA.style.display = 'none';
            console.log("VENTA");
        }else{
            if(data.tipoOportunidad == 282270001){
                inputV.style.display = 'none';
                TextoV.style.display = 'none';
                console.log("ARRIENDO");
            }else{
                console.log("VENTA Y ARRIENDO");
            }
        }

        let tipoOportunidad = data.tipoOportunidad;
        switch (tipoOportunidad){
            case "100000000":
                tipoOportunidad = "Venta y Arriendo";
            break;
            case "282270000":
                tipoOportunidad = "Venta";
            break;
            case "282270001":
                tipoOportunidad = "Arriendo";
            break;
        }

        
        document.getElementById('inputTipoOportunidad').value = tipoOportunidad;
        var firmaA = document.getElementById('firmaarriendo');
        var firmaV = document.getElementById('firmaventa');
        if(data.tipoOportunidad == "282270000"){
            
            firmaV.style.display = 'block';  
            
        }else{
            if(data.tipoOportunidad == "282270001"){
                firmaA.style.display = 'block';  
                
            }else{
                console.log("VENTA Y ARRIENDO");
                firmaV.style.display = 'block';  
                
            }
        }
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

        document.getElementById('inputTipo').value = ValorTipoPropiedad;
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
});