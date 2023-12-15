class EmisorComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

  
        const boton = document.createElement('button');
        boton.textContent = 'Emitir Mensaje';

  
        boton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('mensaje-emisor', {
                bubbles: true, 
                detail: { mensaje: 'Hola desde el emisor!' }
            }));
        });

        shadow.appendChild(boton);
    }
}

customElements.define('emisor-component', EmisorComponent);
