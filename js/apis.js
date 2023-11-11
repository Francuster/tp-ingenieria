const urlMercadoLibre = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const urlCotizador = 'https://www.dolarsi.com/api/api.php?type=' //dolar, cotizador, valoresprincipales
const urlBlue = 'https://api.bluelytics.com.ar/v2/latest';

const contenedorProductos = document.getElementById('contenedor-productos');
const inputBuscarProductos = document.getElementById('input-buscar-productos');

inputBuscarProductos.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'enter') {
        buscarProductos()
    }
})

function onSearchAviso(){
    buscarProductos();
}

let dolar;

async function buscarProductos () {
    const busqueda = inputBuscarProductos.value;
        if (!busqueda || busqueda.length <= 1) return;
    const peticion = await fetch(urlMercadoLibre + busqueda, { method: 'GET' })
    const respuesta = await peticion.json();
    const resultados = respuesta.results;
    console.log(resultados)
    dolar = await actualizarDolar();
    await pintarProductos(resultados);
}

async function pintarProductos (resultados) {
    contenedorProductos.innerHTML = '';

    for (const resultado of resultados) {
        contenedorProductos.innerHTML += `
            <div class="col-md-3 mb-2">
                <div class='card'>
                    <div class='card-body'>
                        <img src="${resultado.thumbnail}" class="card-img-top" alt="Producto">
                        <h6 class='card-title'>${resultado.title}</h6>
                        <p class='card-text'>${resultado.price.toLocaleString()} ARS</p>
                        <p class='card-text'>${getPrecioEnDolares(resultado.price)} USD</p>
                        <p class='card-text'>Vendedor: ${resultado.seller.nickname}</p>
                        <a href="${resultado.permalink}" target="_blank" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `
    }
}

function getPrecioEnDolares (precio) {
    const dolarEnPesos = dolar.oficial.value_sell;
    const precioDolares = precio / dolarEnPesos;
    return precioDolares.toFixed().toLocaleString();
}

async function actualizarDolar () {
    const peticion = await fetch(urlBlue, { method: 'GET' })
    return await peticion.json()
}