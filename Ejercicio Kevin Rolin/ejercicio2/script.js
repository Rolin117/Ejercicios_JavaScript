async function fetchNasaApod() {
    const apiKey = 'mmxmI7naNbqckIo1if138bnGmvi8NfR3RQyXkJvk';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const apodHtml = `
            <div class="card">
                <img src="${data.url}" class="card-img-top" alt="Imagen Astronómica del Día">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.explanation}</p>
                    <p class="card-text"><small class="text-muted">Fecha: ${data.date}</small></p>
                </div>
            </div>
        `;
        document.getElementById('nasaApod').innerHTML = apodHtml;
    } catch (error) {
        document.getElementById('nasaApod').innerHTML = `<p class="text-danger">Error al cargar la imagen: ${error.message}</p>`;
    }
}

fetchNasaApod();