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

            contenido += `<p><img src=${info[i].picture}><p>`, 
            contenido += `<p>nombre:${info[i].name}<p>`, 
            contenido += `<p>tipo:${info[i].type}<p>`
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

            contenido += `<p><img src=${info[i].artist.picture}><p>`, 
            contenido += `<p>nombre:${info[i].type}<p>`, 
            contenido += `<p>tipo:${info[i].title}<p>`
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

            contenido += `<p><img src=${info[i].artist.picture}><p>`, 
            contenido += `<p>nombre:${info[i].artist}<p>`, 
            contenido += `<p>tipo:${info[i].title}<p>`
        }

        console.log(contenido);

        albumList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })