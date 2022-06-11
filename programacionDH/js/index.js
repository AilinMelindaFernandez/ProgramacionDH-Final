let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";//url general


//-------------------ARTISTAS----------------------
fetch(url)
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

            contenido += `<div class="card"><a href="detail-artist.html?id=${info[i].id}"> `,
            contenido += `<img src=${info[i].picture_big}>`, 
            contenido += `<div class="container"><h4><b>${info[i].name}</b></h4></div> </a></div>`
        }

        console.log(contenido);

        artistList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })

  
//------------------ALBUMS-------------------------------------    
fetch(url)
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

            contenido += `<div class= "cardalbum"><img src=${info[i].artist.picture_big}>`,  
            contenido += `<div class="containeralbum"><h4><b>${info[i].title}</b></h4>`,
            contenido += `<p>${info[i].artist.name}</p></div></div>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })

    
//------------------------CANCIONES-----------------------------------
fetch(url)
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

            contenido += `<section class= "macrador"><img src=${info[i].artist.picture_medium}>`, 
            contenido += `${info[i].artist.name}`, 
            contenido += `${info[i].title}</section>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })