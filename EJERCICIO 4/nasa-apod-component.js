class NasaApodComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        // Elementos del componente
        const imagen = document.createElement('img');
        const descripcion = document.createElement('p');
        shadow.appendChild(imagen);
        shadow.appendChild(descripcion);

        // Estilos básicos
        const style = document.createElement('style');
        style.textContent = `
            img {
                width: 100%;
                border-radius: 10px;
                margin-bottom: 10px;
            }
            p {
                font-family: Arial, sans-serif;
            }
        `;
        shadow.appendChild(style);

        // Obtener datos de la API de la NASA
        fetch('https://api.nasa.gov/planetary/apod?api_key=iIvjKKNyXMeigNVSGU0vYH9cMUHkgLF1EBMQYhEz')
            .then(response => response.json())
            .then(data => {
                imagen.src = data.url;
                imagen.alt = data.title;
                descripcion.textContent = data.explanation;
            })
            .catch(error => console.error('Error:', error));
    }
}

customElements.define('nasa-apod-component', NasaApodComponent);
