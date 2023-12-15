class ReceptorComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});


        const mensaje = document.createElement('p');
        this.mensaje = mensaje; 
        shadow.appendChild(mensaje);
    }

    connectedCallback() {
        document.addEventListener('mensaje-emisor', (event) => {
            this.mensaje.textContent = `Mensaje recibido: ${event.detail.mensaje}`;
        });
    }

    disconnectedCallback() {
        document.removeEventListener('mensaje-emisor', this.mensajeHandler);
    }
}

customElements.define('receptor-component', ReceptorComponent);
