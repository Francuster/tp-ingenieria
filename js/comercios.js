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
}
function onClickComercio(event){
    const index = event.target.value;
    const comercio = comerciosArray[i];
}
inicializarComercios();