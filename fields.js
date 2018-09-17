import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class BebuchFields extends LitElement {
  static get properties() {
    return {
      active: {type: Boolean},
      cols: {type: Number},
      rows: {type: Number}
    };
  }

  constructor() {
    super();
    this.active = true;
    this.cols = 5;
    this.rows = 5;
  }

  nextCell(x, y){
    if(!this.active) return;
    this.fields[y][x] = (this.fields[y][x] + 1) % 4;
    this.update(this.fields[y][x]);
  }

  render() {
    if(this.fields === undefined){
      this.fields = Array.from(Array(this.rows), () => new Array(this.cols).fill(0));
    }

    return html`
      <style>
        .container {
          position: relative;
          width: ${this.cols*50}px;
          height: ${this.rows*50}px;
        }
        .grid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          display: inline-grid;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          grid-template-columns:${' auto'.repeat(this.cols)};
        }
        .grid-container > div {
          position: relative;
        }
        .grid-container > div > span {
          position: absolute;
          top: 50%;
          left: 50%;
          bottom: 10%;
          right: 10%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .cell-0{
          background:#ddd;
        }
        .cell-1{
          background:#88f;
        }
        .cell-2{
          background:#8f8;
        }
        .cell-3{
          background:#f44;
        }
        .grid-container > .gear > span{
          background-image: url("gear.svg");
        }
        .grid-container > .spring > span{
          background-image: url("spring.svg");
        }
        .grid-container > .flag > span{
          top: 10%;
          left: 10%;
          background-image: url("flag.svg");
        }
      </style>
      <div class="container">
        <div class="grid-container">
          ${this.fields.map(
            (col, y) => col.map(
              (cell, x) =>
                html`<div class="cell-${cell}" @click=${() => this.nextCell(x, y)}>
                  <span></span>
                </div>`
            )
          )}
        </div>
      </div>
      `;
  }
}

customElements.define('bebuch-fields', BebuchFields);
