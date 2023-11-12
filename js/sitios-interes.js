//hardcodear sitios de interes y atractivos turisticos

export const arraySitiosInteres = [
    {
        nombre: 'UNGS', 
        descripcion: 'Universidad Nacional de General Sarmiento', 
        foto:'https://www.ungs.edu.ar/wp-content/uploads/2019/08/Campus-aérea4.png', 
        coordenadas: [-34.5129782, -58.6869033],
        atractivos: [
            {
                resumen: 'Biblioteca',
                descripcionCompleta: 'Amplia biblioteca publica disponible de 9 a 18 hs',
                foto: 'https://www.ungs.edu.ar/wp-content/uploads/2022/06/biblioteca-horacio-gonzalez-ungs.jpg',
                nombreSitio: 'UNGS'
            },
            {
                resumen: 'Buffet',
                descripcionCompleta: 'Lugar para comer',
                foto: 'https://www.ungs.edu.ar/wp-content/uploads/2022/06/biblioteca-horacio-gonzalez-ungs.jpg',
                nombreSitio: 'UNGS'
            }
        ]
    },
    {
        nombre: 'UBA', 
        descripcion: 'Universidad de Buenos Aires', 
        foto:'https://www.ungs.edu.ar/wp-content/uploads/2019/08/Campus-aérea4.png', 
        coordenadas: [-34.5129782, -48.6869033]
    }

]


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

