
let marcaFiltradas = [];

fetch("autos.json")
    .then(res => res.json())
    .then(marca => {
        marcaFiltradas = marca;
        
        crearInfo();
    });

    function crearInfo(){
        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get("id");
        const marcaBuscada = marcaFiltradas.find(marca => marca.id ==id);

        contenedor =document.querySelector(".container_info");

        if(marcaBuscada){
            contenedor.innerHTML=`
            <div class="column">
            <h2>${marcaBuscada.marca}</h2>
            <img src="${marcaBuscada.imagen}" alt="imagen de la marca">
            </div>
            <div class="column">
            <h2>Información</h2>
            <p>${marcaBuscada.information}</p>
            </div>`;
        }else{
            contenedor.innerHTML=`<p>Ciudad no encontrada.</p>`;
        }
    }