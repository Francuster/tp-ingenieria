const urlMercadoLibre = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const urlCotizador = 'https://www.dolarsi.com/api/api.php?type=' //dolar, cotizador, valoresprincipales
const urlBlue = 'https://api.bluelytics.com.ar/v2/latest';

const contenedorProductos = document.getElementById('contenedor-productos');
const inputBuscarProductos = document.getElementById('input-buscar-productos');

inputBuscarProductos.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'enter') {
        const busqueda = inputBuscarProductos.value;
        if (!busqueda || busqueda.length <= 1) return;
        buscarProductos(busqueda)
    }
})

async function buscarProductos (busqueda) {
    const peticion = await fetch(urlMercadoLibre + busqueda, { method: 'GET' })
    const respuesta = await peticion.json();
    const resultados = respuesta.results;
    console.log(resultados)
    pintarProductos(resultados);
}

function pintarProductos (resultados) {
    contenedorProductos.innerHTML = '';

    for (const resultado of resultados) {
        contenedorProductos.innerHTML += `
            <div class="col-md-4">
                <div class='card'>
                    <div class='card-body'>
                        <img src="${resultado.thumbnail}" class="card-img" alt="Producto">
                        <h6 class='card-title'>${resultado.title}</h6>
                        <p class='card-text'>$${resultado.price.toLocaleString()}</p>
                        <p class='card-text'>Vendedor: ${resultado.seller.nickname}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `
    }
}