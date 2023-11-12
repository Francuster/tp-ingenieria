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

let listaSitioInteres = document.getElementById('listaSitioInteres');

for(var i = 0; i < arraySitiosInteres.length; i++){
    let sitio = arraySitiosInteres[i];
    let li = document.createElement('li');
    li.className = 'list-group-item list-group-item-action';
    li.textContent = sitio.nombre;
    listaSitioInteres.appendChild(li);
}

listaSitioInteres.addEventListener('click', onClickSitioInteres);

function onClickSitioInteres(event){
    console.log(event.target.textContent);
    const sitioInteres = event.target.textContent;

}