import {LitElement, html, css} from 'lit';

const showMessage = () => {
    alert('Se ejecuta')
}

export class MyButton extends LitElement {
  static properties = {
    label: {},
  };

  static styles = css`
  .main { 
    padding: 1rem 1rem;
    border: 0;
    border-radius: 10px;
    background-color: #F0DA6B;
  }
  .main:hover {
    cursor: pointer;
  }
  `

  constructor() {
    super();
  }

  render() {
    return html`
    <button @click="${showMessage}" class="main">${this.label}</button>
    `;
  }
}

customElements.define('my-button', MyButton);
