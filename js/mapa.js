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

for(var i = 0; i < arraySitiosInteres.length; i++){
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
    map.setView(arraySitiosInteres[index].coordenadas, 16);

}
