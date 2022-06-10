let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        let info = data.artists.data;

        let artistList = document.querySelector(".artistas");
        let contenido = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<div class = "card"> <img src=${info[i].picture}></div>`, 
            contenido += `<div class= "card">${info[i].name}</div>`
          
        }

        console.log(contenido);

        artistList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })

    
fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        let info = data.albums.data;

        let albumList = document.querySelector(".albums");
        let contenido = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<div class= "cardalbum"><img src=${info[i].artist.picture}></div>`,  
            contenido += `<div class= "cardalbum">titulo:${info[i].title}</div>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })

    

fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        let info = data.tracks.data;

        let albumList = document.querySelector(".contenedorcanciones");
        let contenido = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<section class= "macrador"><img src=${info[i].artist.picture}></section>`, 
            contenido += `<section class= "marcador">nombre:${info[i].artist.name}</section>`, 
            contenido += `<section class= "marcador">titulo:${info[i].title}</section>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })