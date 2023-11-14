function inicializarComercios(){
    let comerciosList = document.getElementById('comerciosList');
    for(let i = 0; i < comerciosArray.length; i++){
        let sitio = comerciosArray[i];
        let li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = sitio.nombre;
        li.value = i;
        comerciosList.appendChild(li);
    }

    comerciosList.addEventListener('click', onClickComercio);
}
async function onClickComercio(event){
    await actualizarDolar();
    const index = event.target.value;
    const comercio = comerciosArray[index];

    let datosComercioDiv = document.getElementById('datosComercio');
    datosComercioDiv.innerHTML = `
    <h2>Datos Comercio</h2>
    <p>Nombre: ${comercio.nombre}</p>
    <p>Descripcion: ${comercio.descripcion}</p>
    <p>Direccion: ${comercio.direccion}</p>
    <p>Horarios: ${comercio.horarios}</p>
    <p>Telefono: ${comercio.telefono}</p>
    `;

    let avisosDiv = document.getElementById('avisos');

    avisosDiv.innerHTML = '';

    let avisos = JSON.parse(localStorage.getItem('avisos'));

    let avisosFiltrados = avisos.lista.filter(
        value => {
            return value.comercio == comercio.nombre;
        }
    )

    const formato = new Intl.NumberFormat('es-ES');


    for (let aviso of avisosFiltrados){
        //create card
        const cardTemplate = `
        <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="${aviso.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${aviso.nombre}</h5>
                <p class="card-text">${aviso.descripcion}</p>
                <p class="card-text">$ ${formato.format(aviso.precio)} ARS</p>
                 <p class="card-text">$ ${formato.format(getPrecioEnDolares(aviso.precio))} USD</p>
                <p class="card-text">Comercio: ${aviso.comercio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
            </div>
        </div>
        
        `
        avisosDiv.innerHTML += cardTemplate;

    }


}
inicializarComercios();