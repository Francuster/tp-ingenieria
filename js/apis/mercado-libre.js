const urlMercadoLibre = 'https://api.mercadolibre.com/sites/MLA/search?q=';

async function buscarProductos (criterio) {
    const peticion = await fetch(urlMercadoLibre + criterio, { method: 'GET' })
    const res = await peticion.json();
    return res.results;
}