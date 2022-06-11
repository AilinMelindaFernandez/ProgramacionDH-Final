let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idArtista = qsToObject.get('id'); //obtengo el id

 
let urlDetalle =`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtista}?Secret_Key=b60184653975ec2f350efc0300bb8544`;

fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let title = document.querySelector('.contenedorinfoartist');
        let image = document.querySelector('img');

        title.innerText = data.name;
        image.src= data.picture

    })
    .catch(function(error){
        console.log(error)
    })