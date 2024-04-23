const personajes = [
    { nombre: "Jefe Maestro", ac: "Halo TMCC", imagen: "img/halo.jpg" },
    { nombre: "Doom Slayer", ac: "Doom Eternal", imagen: "img/doom.jpg" },
    { nombre: "Red team", ac: "Team Fortress 2", imagen: "img/tf2.jpg" },
    { nombre: "Jetstream Sam", ac: "Metal Gear Rising", imagen: "img/sam.jpg" },
    { nombre: "Leon Scott Kennedy", ac: "Resident Evil", imagen: "img/leon.jpg" },
    { nombre: "Iron Maiden", ac: "Grupo artistico", imagen: "img/iron maiden.jpg" },
    { nombre: "Eminem", ac: "Artista", imagen: "img/eminem.jpg" },
    { nombre: "Slipknot", ac: "Grupo artistico", imagen: "img/slipknot.jpg" },
    { nombre: "System of a Down", ac: "Grupo artistico", imagen: "img/system of a down.jpg" },
    { nombre: "Nirvana", ac: "Grupo artistico", imagen: "img/nirvana.jpg" }
];

function mostrarPersonajes() {
    const contenedor = document.getElementById('personajes');
    personajes.forEach(personaje => {
        contenedor.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${personaje.imagen}" class="card-img-top img" alt="${personaje.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.nombre}</h5>
                        <p class="card-text">${personaje.ac}</p>
                    </div>
                </div>
            </div>`;
    });
}

mostrarPersonajes();
