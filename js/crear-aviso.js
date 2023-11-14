const contenedorFormulario = document.getElementById('contenedor-formulario')

function pintarFormulario () {
    contenedorFormulario.innerHTML = `
        <div class="container mt-5">
            <h2>Crear Aviso</h2>
                <form id="formulario-aviso">
                    <div class="form-group mb-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="input-nombre" placeholder="Ingrese el nombre" required>
                    </div>

                    <div class="form-group mb-3">
                        <label for="input-descripcion" class="form-label">Descripcion:</label>
                        <textarea class="form-control" id="input-descripcion" rows="4" placeholder="Ingrese la descripcion" required></textarea>
                    </div>

                    <div class="form-group mb-3">
                        <label for="input-precio" class="form-label">Precio:</label>
                        <input type="number" class="form-control" id="input-precio" min="1" placeholder="Ingrese el precio" required>
                    </div>

                    <div class="form-group mb-3">
                        <label for="input-comercio" class="form-label">Comercio:</label>
                        <select id='input-comercio' class="form-select" aria-label="Default select example" required>
                            ${comerciosArray.map(comercio => `<option value='${comercio.nombre}'>${comercio.nombre}</option>`)}
                        </select>
                    </div>

                    <div class="form-group mb-3">
                        <label for="imagen" class="form-label">Seleccione una imagen:</label>
                        <input type="file" class="form-control-file" id="input-imagen" accept="image/*" required>
                    </div>

                    <button type="submit" class="btn btn-primary " id="boton-enviar">Enviar</button>

                    <div class="mt-4" id="contenedor-imagen"></div>
                </form>
        </div>
    `
}

pintarFormulario();

const inputNombre = document.getElementById('input-nombre')
const inputDescripcion = document.getElementById('input-descripcion')
const inputPrecio = document.getElementById('input-precio')
const inputImagen = document.getElementById('input-imagen')
const inputComercio = document.getElementById('input-comercio')

const formulario = document.getElementById('formulario-aviso')

function obtenerNombre () {
    const nombre = inputNombre.value;
    return nombre;
}

const contenedorAvisosSimilares = document.getElementById('contenedor-avisos-similares')

inputNombre.addEventListener('blur', async e => {
    await actualizarDolar();
    const nombre = obtenerNombre();
    const avisosSimilares = await buscarProductos(nombre);
    const formato = new Intl.NumberFormat('es-ES');
    contenedorAvisosSimilares.innerHTML = '';

    for (aviso of avisosSimilares) {
        contenedorAvisosSimilares.innerHTML += `
            <div class="col-md-3 mb-1">
                <div class='card'>
                    <img src="${aviso.thumbnail}" class="card-img-top" alt="Producto">
                    <div class='card-body'>
                        <h6 class='card-title'>${aviso.title}</h6>
                        <p class='card-text'>$ ${formato.format(aviso.price)} ARS</p>
                        <p class='card-text'>$ ${formato.format(getPrecioEnDolares(aviso.price))} USD</p>
                        <p class='card-text'>Vendedor: ${aviso.seller.name}</p>
                    </div>
                </div>
            </div>
        `
    }
})

function obtenerDescripcion () {
    const descripcion = inputDescripcion.value;
    return descripcion;
}

function obtenerPrecio () {
    const precio = inputPrecio.value;
    return precio;
}

function obtenerComercio () {
    const comercio = inputComercio.value;
    return comercio;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const archivo = inputImagen.files[0];
    if (!archivo) return;

    const reader = new FileReader();
    
    reader.addEventListener('load', e => {
        const imagenUrl = e.target.result.split(',')[1];
        actualizarStorage(imagenUrl);
    })

    reader.readAsDataURL(archivo)
})

function actualizarStorage (imagenUrl) {
    const nombre = obtenerNombre();
    const descripcion = obtenerDescripcion();
    const precio = obtenerPrecio();
    const comercio = obtenerComercio();
    const imagen = inputImagen.value;

    let avisos = localStorage.getItem('avisos');

    if (!avisos) {
        localStorage.setItem('avisos', JSON.stringify({ lista: [] }))
    }

    avisos = JSON.parse(localStorage.getItem('avisos'));

    avisos.lista.push({
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        comercio: comercio,
        imagen: '../images/goku.jpg'
    })

    localStorage.setItem('avisos', JSON.stringify(avisos));
}

const inputContenedorImagen = document.getElementById('contenedor-imagen');

function setEventoInputImagen () {
    inputImagen.addEventListener('change', (e) => {
        const archivo = inputImagen.files[0];
        if (!archivo) return;
    
        const reader = new FileReader();
        
        reader.addEventListener('load', e => {
            const imagenUrl = e.target.result;
            inputContenedorImagen.innerHTML = `<img src="${imagenUrl}" class="img-fluid" alt="Imagen seleccionada">`;
        })
    
        reader.readAsDataURL(archivo)
    })
}

setEventoInputImagen();