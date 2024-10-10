const contenedor_cards = document.getElementById("contenedor_cards");
const inputBusqueda = document.getElementById('buscar');

let marcaFiltrados = [];

fetch("autos.json")
    .then(res => res.json())
    .then(marca => {
        console.log(marca);
        crearTarjetas(marca);
        
        marcaFiltrados = marca;
    });
let templateCard = "";

function crearTarjetas(marca) {
    templateCard = "";

    for (const marc of marca) {
        templateCard += `
        <div class="card">
            <img src="${marc.imagen}" alt="${marc.ciudad} ${marc.id}">
            <p>${marc.marca}</p>
            <a class="btn btn-danger" href="./info.html?id=${marc.id}">Mas info</a>
        </div>`;
    }
    contenedor_cards.innerHTML = templateCard;
}

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;
    crearTarjetasInput();

    if (marcaFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    }
    console.log(marcaFiltradosInput);
    
    let labelBuscar = document.getElementById("labelBuscar");
    labelBuscar.innerHTML = inputValue;
    console.log(inputValue);
});

function crearTarjetasInput() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    
    marcaFiltradosInput = marcaFiltrados.filter(marca => marca.marca.toLowerCase().includes(textoBusqueda));
    templateCard = "";

    for (const marc of marcaFiltradosInput) {
        templateCard += `
        <div class="card">
            <img src="${marc.imagen}" alt="${marc.marca} ${marc.id}">
            <p>${marc.marca}</p>
            <a class="btn btn-danger" href="./info.html?id=${marc.id}">Mas info</a>
        </div>`;
    }
    contenedor_cards.innerHTML = templateCard;
}