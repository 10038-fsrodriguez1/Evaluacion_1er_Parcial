class ContenedorComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

  
        const contenedor = document.createElement('div');
        const encabezadoSlot = document.createElement('slot');
        const contenidoSlot = document.createElement('slot');

        encabezadoSlot.name = 'encabezado';
        contenidoSlot.name = 'contenido';


        const style = document.createElement('style');
        style.textContent = `
            div {
                border: 2px solid #4A90E2;
                border-radius: 8px;
                padding: 16px;
                margin: 16px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #FFF;
                font-family: Arial, sans-serif;
            }
            slot[name='encabezado'] {
                display: block;
                font-weight: bold;
                font-size: 1.4em;
                color: #333;
                margin-bottom: 12px;
                border-bottom: 1px solid #EEE;
                padding-bottom: 8px;
            }
            slot[name='contenido'] {
                display: block;
                font-size: 1em;
                color: #666;
            }
        `;

   
        shadow.appendChild(style);
        shadow.appendChild(contenedor);
        contenedor.appendChild(encabezadoSlot);
        contenedor.appendChild(contenidoSlot);
    }
}

customElements.define('contenedor-component', ContenedorComponent);
