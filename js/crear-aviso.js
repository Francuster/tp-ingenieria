const inputNombre = document.getElementById('input-nombre')
const inputDescripcion = document.getElementById('input-descripcion')
const inputPrecio = document.getElementById('input-precio')
const inputImagen = document.getElementById('input-imagen')
const formulario = document.getElementById('formulario-aviso')

function obtenerNombre () {
    const nombre = inputNombre.value;
    return nombre;
}

function obtenerDescripcion () {
    const descripcion = inputDescripcion.value;
    return descripcion;
}

function obtenerPrecio () {
    const precio = inputPrecio.value;
    return precio;
}

inputImagen.addEventListener('change', (e) => {
    const archivo = inputImagen.files[0];
    if (!archivo) return;

    const reader = new FileReader();
    
    reader.addEventListener('load', e => {
        const imagenUrl = e.target.result;
        document.getElementById('contenedor-imagen').innerHTML = `<img src="${imagenUrl}" class="img-fluid" alt="Imagen seleccionada">`;
    })

    reader.readAsDataURL(archivo)
})

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

    let avisos = localStorage.getItem('avisos');

    if (!avisos) {
        localStorage.setItem('avisos', JSON.stringify({ lista: [] }))
    }

    avisos = JSON.parse(localStorage.getItem('avisos'));

    avisos.lista.push({
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagenUrl
    })

    localStorage.setItem('avisos', JSON.stringify(avisos));
}