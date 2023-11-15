
function inicializarCentrosYMovilesDeAsistencia(){

    //var marker = L.marker(coords).addTo(map);
    console.log(arrayCentrosAsistencia + arrayMovilesAsistencia)
    for (let centro of arrayCentrosAsistencia){
        let marker = L.marker(centro.coordenadas).addTo(map);
        marker.bindPopup(`<b> ${centro.nombreSede}</b>`);
    }

    for (let movil of arrayMovilesAsistencia){
        let marker = L.marker(movil.coordenadas).addTo(map);
        marker.bindPopup(`<b> ${"Patrulla"}</b>`);
    }

    let listaCentros = document.getElementById('listaCentros');

    for(let i = 0; i < arrayCentrosAsistencia.length; i++){
        let centro = arrayCentrosAsistencia[i];
        let li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = centro.nombreSede;
        li.value = i;
        listaCentros.appendChild(li);

    }

    let listaMoviles = document.getElementById('listaMoviles');

    for(let i = 0; i < arrayMovilesAsistencia.length; i++){
        let movil = arrayMovilesAsistencia[i];
        let li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = "Patrulla";
        li.value = i;
        listaMoviles.appendChild(li);

    }

    listaCentros.addEventListener('click', onClickCentroAsistencia);
    listaMoviles.addEventListener('click', onClickMovilAsistencia);
}

function onClickCentroAsistencia(event){
    const index = event.target.value;
    let centro = arrayCentrosAsistencia[index];
    map.setView(centro.coordenadas, 16);

    let centrosAsistencia = document.getElementById('centroDetalle');

    while (centrosAsistencia.childNodes.length != 0){
        centrosAsistencia.removeChild(centrosAsistencia.firstChild);
    }
    let p1 = document.createElement('p');
    p1.textContent = `${centro.nombreSede}`;
    centrosAsistencia.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Dirección: ${centro.direccion}`;
    centrosAsistencia.appendChild(p2);

    let p3 = document.createElement('p');
    p2.textContent = `Datos de contacto: ${centro.datosContacto}`;
    centrosAsistencia.appendChild(p3);

    let p4 = document.createElement('p');
    p2.textContent = ` Horario de atencion: ${centro.horarioAtencion}`;
    centrosAsistencia.appendChild(p4);

}

function onClickMovilAsistencia(event){
    const index = event.target.value;
    let movil = arrayMovilesAsistencia[index];
    map.setView(movil.coordenadas, 16);

    let movilesAsistencia = document.getElementById('movilDetalle');

    while (movilesAsistencia.childNodes.length != 0){
        movilesAsistencia.removeChild(movilesAsistencia.firstChild);
    }
    let p1 = document.createElement('p');
    p1.textContent = `Lugar de patrullaje: ${movil.lugar}`;
    movilesAsistencia.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Días de atención: ${movil.diaAtencion}`;
    movilesAsistencia.appendChild(p2);

    let p3 = document.createElement('p');
    p2.textContent = `Horario de atención: ${movil.horarioAtencion}`;
    movilesAsistencia.appendChild(p3);

}
inicializarCentrosYMovilesDeAsistencia();