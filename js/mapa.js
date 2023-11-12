const coords = [-34.5129782, -58.6869033];

function crearMapa() {
    var map = L.map('map').setView(coords, 13);

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