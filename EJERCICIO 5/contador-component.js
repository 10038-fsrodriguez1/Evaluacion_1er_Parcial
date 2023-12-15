class ContadorComponent extends HTMLElement {
    constructor() {
        super();
        this.contador = 0;

        const shadow = this.attachShadow({mode: 'open'});
        const estilo = document.createElement('style');
        const contenedor = document.createElement('div');
        const contadorDisplay = document.createElement('p');
        const botonIncrementar = document.createElement('button');
        const botonDisminuir = document.createElement('button');

        estilo.textContent = `
            div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            p {
                font-size: 24px;
                color: #333;
                margin: 0 15px;
            }
            button {
                padding: 10px 20px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #45a049;
            }
        `;

        contadorDisplay.textContent = this.contador;
        botonIncrementar.textContent = 'Incrementar';
        botonDisminuir.textContent = 'Disminuir';

        botonIncrementar.onclick = () => this.incrementar(contadorDisplay);
        botonDisminuir.onclick = () => this.disminuir(contadorDisplay);

        contenedor.appendChild(botonDisminuir);
        contenedor.appendChild(contadorDisplay);
        contenedor.appendChild(botonIncrementar);
        shadow.appendChild(estilo);
        shadow.appendChild(contenedor);
    }

    incrementar(display) {
        this.contador++;
        display.textContent = this.contador;
    }

    disminuir(display) {
        this.contador--;
        display.textContent = this.contador;
    }
}

customElements.define('contador-component', ContadorComponent);
