const inputComercio = document.getElementById('input-comercio')

function pintarOpcionesComercios () {
    inputComercio.innerHTML = comerciosArray.map(comercio => `<option value='${comercio.nombre}'>${comercio.nombre}</option>`);
}

pintarOpcionesComercios();

const inputNombre = document.getElementById('input-nombre')
const inputDescripcion = document.getElementById('input-descripcion')
const inputPrecio = document.getElementById('input-precio')
const inputImagen = document.getElementById('input-imagen')

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
                        <p class='card-text'>Vendedor: ${aviso.seller.nickname}</p>
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
        imagen: '../images/bolsa.jpg'
    })

    localStorage.setItem('avisos', JSON.stringify(avisos));
    mostrarAlertaConfirmacion()
    reiniciarFormulario();
}

function reiniciarFormulario () {
    inputNombre.value = ''
    inputDescripcion.value = ''
    inputPrecio.value = 0
    inputComercio.value = 'Sodimac'
    inputImagen.value = ''
    contenedorAvisosSimilares.innerHTML = ''
    inputContenedorImagen.innerHTML = ''
}

function mostrarAlertaConfirmacion () {
    Swal.fire({
        title: 'Aviso Creado',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
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