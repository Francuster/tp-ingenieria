const coords = [-34.5129782, -58.6869033];

var map;
function crearMapa() {
    console.log('crear mapa')
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
        alert('[' + lat +',' + lng + ']');
    }

    map.on('click', onMapClick);

}

crearMapa();
