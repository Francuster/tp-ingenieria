const contenedorAvisos = document.getElementById('contenedor-avisos');
const inputBuscarAvisos = document.getElementById('input-buscar-avisos');
const botonBuscarAvisos = document.getElementById('boton-buscar-avisos');

inputBuscarAvisos.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'enter') {
        buscarAvisos();
    }
})

botonBuscarAvisos.addEventListener('click', buscarAvisos);

async function buscarAvisos () {
    await actualizarDolar();

    const criterio = inputBuscarAvisos.value.toLowerCase();
    if (!criterio || criterio.length <= 1) return;

    let avisos = localStorage.getItem('avisos');
    if (!avisos) {
        avisos = { lista: [] };
        localStorage.setItem('avisos', JSON.stringify(avisos))
    }
    
    avisos = JSON.parse(avisos);
    const resultados = avisos.lista.filter(item => item.nombre.toLowerCase().includes(criterio));
    pintarProductos(resultados);
} 

function pintarProductos (resultados) {
    contenedorAvisos.innerHTML = '';
    const formato = new Intl.NumberFormat('es-ES');

    for (const resultado of resultados) {
        contenedorAvisos.innerHTML += `
            <div class="col-md-3 mb-2">
                <div class='card'>
                    <div class='card-body'>
                        <img src="../images/goku.jpg" class="card-img-top" alt="Producto">
                        <h6 class='card-title'>${resultado.nombre}</h6>
                        <p class='card-text'>$ ${formato.format(resultado.precio)} ARS</p>
                        <p class='card-text'>$ ${formato.format(getPrecioEnDolares(resultado.precio).toFixed(2))} USD</p>
                        <p class='card-text'>Vendedor: ${resultado.comercio}</p>
                        <a href="#" target="_blank" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `
    }
}