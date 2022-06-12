
// ---------------------FORMULARIO BUSCADOR---------------------------

let formularioHeader = document.querySelector("form")
let inputFormulario = document.querySelector(".busqueda")

formularioHeader.addEventListener("submit", function(evento) {
    evento.preventDefault()
    if (inputFormulario.value.length >= 3) {
        this.submit()
    } else {
        alert("Son 3 caracteres como minimo")
    }
})

let proxy = "https://api.allorigins.win/raw?url="
let endpoints = {
    canciones: "https://api.deezer.com/chart",
    albumes: "https://api.deezer.com/chart",
    artistas: "https://api.deezer.com/chart"
}

// ---------------------FECH DE ARTISTAS---------------------------

fetch(`${proxy}${endpoints.artistas}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        let info = data.artists.data;

        let artistList = document.querySelector(".artistas");
        let contenido = "";

        for(let i=0; i<5; i++){
            //construir un elemento de lista

            contenido += `<div class="card">
                            <a href="detail-artist.html?id=${info[i].id}"> 
                                <img src=${info[i].picture_big}>
                                <div class="container">
                                    <h4><b>${info[i].name}</b></h4>
                                </div> 
                            </a>
                          </div>`
          
        }

        console.log(contenido);

        artistList.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error);
    })

// ---------------------FECH DE ALBUNES---------------------------
    
    fetch(`${proxy}${endpoints.albumes}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.albums.data;

        let albumList = document.querySelector(".albums");
        let contenido = "";

        for(let i=0; i<5; i++){
            //construir un elemento de lista

            contenido += `<div class= "cardalbum">
                            <img src=${info[i].artist.picture_big}>  
                            <div class="containeralbum">
                                <h4><b>${info[i].title}</b></h4>
                                <p>${info[i].artist.name}</p>
                            </div>
                          </div>`


        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error);
    })

    
// ---------------------FECH DE CANCIONES---------------------------

    fetch(`${proxy}${endpoints.canciones}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.tracks.data;

        let albumList = document.querySelector(".contenedorcanciones");
        let contenido = "";

        for(let i=0; i<5; i++){
            //construir un elemento de lista

            contenido += `<section class= "marcador">
                                <div class= "contenedorlinkscanciones">
                                    <a href="detail-track.html?q=${info[i].id}">
                                        <img src=${info[i].artist.picture_medium}>    
                                    </a>
                                </div>
                                <div class= "contenedorlinkscanciones">
                                    <a href="detail-track.html?q=${info[i].id}">
                                        ${info[i].artist.name}-${info[i].title}
                                    </a>
                                </div>
                         </section>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })
    .catch(function(error){
        console.log(error);
    })