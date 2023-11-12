import {arraySitiosInteres} from './sitios-interes.js';
const coords = [-34.5129782, -58.6869033];

function crearMapa() {
    var map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker(coords).addTo(map);
    console.log(arraySitiosInteres)

}

crearMapa();