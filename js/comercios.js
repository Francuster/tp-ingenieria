function inicializarComercios(){


    let comerciosList = document.getElementById('comerciosList');
    for(let i = 0; i < comerciosArray.length; i++){
        let comercio = comerciosArray[i];
        let li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = comercio.nombre;
        li.value = i;
        comerciosList.appendChild(li);

        //cargar mapa
        let marker = L.marker(comercio.coordenadas).addTo(map);
        marker.bindPopup(`<b> ${comercio.nombre}</b>`);
    }

    comerciosList.addEventListener('click', onClickComercio);
}
async function onClickComercio(event){
    await actualizarDolar();
    const index = event.target.value;
    const comercio = comerciosArray[index];
    map.setView(comercio.coordenadas, 16);


    let datosComercioDiv = document.getElementById('datosComercio');
    datosComercioDiv.innerHTML = `
    <div class="col mt-2">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${comercio.nombre}</h5>
            <p class="card-text">${comercio.descripcion}</p>
            <p class="card-text">Dirección: ${comercio.direccion} ARS</p>
             <p class="card-text">Horario:  ${comercio.horarios} USD</p>
            <p class="card-text">Teléfono: ${comercio.telefono}</p>
        </div>
        </div>
    </div>
    
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
            <img src="../images/bolsa.jpg" class="card-img-top" alt="...">
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