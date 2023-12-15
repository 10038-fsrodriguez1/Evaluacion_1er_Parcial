class SaludoComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});


        const wrapper = document.createElement('div');
        const style = document.createElement('style');
        const saludo = document.createElement('p');

    
        saludo.textContent = "Hola, Mundo!";

   
        style.textContent = `
            p {
                font-size: 20px;
                color: blue;
            }
        `;

  
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(saludo);
    }
}


customElements.define('saludo-component', SaludoComponent);
