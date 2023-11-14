const urlCotizador = 'https://www.dolarsi.com/api/api.php?type=' //dolar, cotizador, valoresprincipales
const urlBlue = 'https://api.bluelytics.com.ar/v2/latest';

let dolar;

async function actualizarDolar () {
    const peticion = await fetch(urlBlue, { method: 'GET' })
    dolar = await peticion.json();
}

function getPrecioEnDolares (precio) {
    const dolarEnPesos = dolar.oficial.value_sell;
    const precioDolares = precio / dolarEnPesos;
    return precioDolares.toFixed(2);
}