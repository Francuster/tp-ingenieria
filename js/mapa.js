const coords = [-34.5129782, -58.6869033];

var map;
function crearMapa() {
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    function onMapClick(e) {
        // Get the coordinates from the click event
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        // Log or use the coordinates as needed
        console.log('Clicked on the map at:', lat, lng);
        alert('lat:' + lat +' long:' + lng);
    }

    map.on('click', onMapClick);


    //var marker = L.marker(coords).addTo(map);
    console.log(arraySitiosInteres)
    for (let sitio of arraySitiosInteres){
        let marker = L.marker(sitio.coordenadas).addTo(map);
        marker.bindPopup(`<b> ${sitio.nombre}</b>`);
    }

}

crearMapa();

let listaSitioInteres = document.getElementById('listaSitioInteres');

for(let i = 0; i < arraySitiosInteres.length; i++){
    let sitio = arraySitiosInteres[i];
    let li = document.createElement('li');
    li.className = 'list-group-item list-group-item-action';
    li.textContent = sitio.nombre;
    li.value = i;
    listaSitioInteres.appendChild(li);

}

listaSitioInteres.addEventListener('click', onClickSitioInteres);

function onClickSitioInteres(event){
    console.log(event.target.textContent);
    const index = event.target.value;
    let sitio = arraySitiosInteres[index];
    map.setView(sitio.coordenadas, 16);

    let sitioInteresP = document.getElementById('sitioInteresDetalle');

    while (sitioInteresP.childNodes.length != 0){
        sitioInteresP.removeChild(sitioInteresP.firstChild);
    }
    let p1 = document.createElement('p');
    p1.textContent = `${sitio.nombre}`;
    sitioInteresP.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Descripcion: ${sitio.descripcion}`;
    sitioInteresP.appendChild(p2);

    let img1 = document.createElement('img');
    img1.src = sitio.foto;
    img1.height = 300;
    sitioInteresP.appendChild(img1);


    let atractivoElement = document.getElementById('atractivos');
    atractivoElement.innerHTML = ``;
    for (let j = 0; j < sitio.atractivos.length; j++){
        console.log(sitio.atractivos[j]);
        let atractivo = sitio.atractivos[j];


        //create card
        const cardTemplate = `
        <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="${atractivo.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${atractivo.resumen}</h5>
                <p class="card-text">${atractivo.descripcionCompleta}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        
        `

        atractivoElement.innerHTML += cardTemplate;
    }
    

}
