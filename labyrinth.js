import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import {BebuchFields} from "./fields.js";

export class BebuchLabyrinth extends LitElement {
  static get properties() {
    return {
      cols: {type: Number},
      rows: {type: Number}
    };
  }

  constructor() {
    super();
    this.cols = 5;
    this.rows = 5;
  }

  render() {
    return html`
        <bebuch-fields cols=${this.rows} rows=${this.rows}></bebuch-fields>
      `;
  }
}

customElements.define('bebuch-labyrinth', BebuchLabyrinth);
