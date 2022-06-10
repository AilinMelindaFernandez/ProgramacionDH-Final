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