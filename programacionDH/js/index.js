let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        let info = data.artists.data;

        let characterList = document.querySelector(".artistas");
        let contenido = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista

            contenido += `<p><img src=${info[i].picture}><p>`, 
            contenido += `<p>nombre:${info[i].name}<p>`, 
            contenido += `<p>tipo:${info[i].type}<p>`
        }

        console.log(contenido);

        characterList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })


<<<<<<< HEAD
    let urlA = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums";

    fetch(urlA)
=======

    let urla = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

fetch(urla)
>>>>>>> 9f43e89cde271171334ec796d14a8f34281c85ad
    .then(function(response){
        return response.json();
    })

<<<<<<< HEAD
=======

>>>>>>> 9f43e89cde271171334ec796d14a8f34281c85ad
    .then(function(data){
        console.log(data);

        let info = data.albums.data;

        let characterList = document.querySelector(".albums");
        let contenido = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista

<<<<<<< HEAD
            contenido += `<p><img src=${info[i].picture}><p>`, 
            contenido += `<p>titulo:${info[i].title}<p>`, 
            contenido += `<p>tipo:${info[i].type}<p>`
=======
            contenido += `<p><img src=${info[i].artist.picture}><p>`, 
            contenido += `<p>nombre:${info[i].type}<p>`, 
            contenido += `<p>tipo:${info[i].title}<p>`
>>>>>>> 9f43e89cde271171334ec796d14a8f34281c85ad
        }

        console.log(contenido);

        characterList.innerHTML += contenido;

    })


    .catch(function(error){
        console.log(error);
    })