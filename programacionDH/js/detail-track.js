let infocancioncontenedor = document.querySelector(".infocancioncontenedor")
let widget = document.querySelector(".reproductor")

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/track/"

let query = location.search
let objetoQuery = new URLSearchParams(query)
let trackID = objetoQuery.get("q")

fetch(`${proxy}${endpoint}${trackID}`)
    .then(function(data) {return data.json()})
    .then(function(data) {

        infocancioncontenedor.innerHTML += `
            <img src="${data.album.cover_xl}" class="cancionalbumfoto">
            <div class="infocancion">
                <h3 class="titulosdetalleh3">${data.title_short}</h3>
                <ol>
                    <li class="listainfocancion">
                        <p><a href="./detail-artist.html/${data.contributors.id}">Artista: ${data.contributors.name}</a></p>
                    </li>
                    <li class="listainfocancion">
                        <p><a href="./detail-album.html">Album: ${data.album.title}</a></p>
                    </li>
                    <li class="listainfocancion">
                        <p>Fecha de lanzamiento: ${data.release_date}</p>
                    </li>
                    <li class="listainfocancion">
                        <p>Duracion: ${data.duration}</p>
                    </li>
                </ol> 
            </div>
        `

        // Agregrar css
        widget.innerHTML = `
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${trackID}"
                frameborder="0" allowtransparency="true"
                allow="encrypted-media; clipboard-write"></iframe>
        `
        let like = document.querySelector("#like") // botón de favorito
        
        let favoritos = []
        recupero_storage = localStorage.getItem("canciones_favoritas")
        if (recupero_storage === "" || recupero_storage === null) {
            recupero_storage = "[]"
        }
        console.log(recupero_storage)
        let string_to_array = JSON.parse(recupero_storage)
        favoritos = string_to_array

        like.addEventListener('click', function() {
            if (favoritos.includes(data.id)) {
                let posicionID = favoritos.indexOf(data.id)
                favoritos.splice(posicionID, 1)
                like.style.color = 'grey'
            } else {
                favoritos.push(data.id)
                like.style.color = 'green'
            }
            let favoritos_en_string = JSON.stringify(favoritos)
            localStorage.setItem("canciones_favoritas",favoritos_en_string)
            console.log(favoritos_en_string)
        })
        
    })
    .catch(function(error) {console.log(error)})