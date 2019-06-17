import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('ww-dialogue')
export default class Dialogue extends LitElement {

  @property({type: Object}) event;

  static get styles () {
    return css`
      .dialogue-box {
        background-color: #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      .header-img {
        width: 100%;
        max-height: 80%;
      }
    `;
  }

  connectedCallback () {
    super.connectedCallback();
    document.body.style.overflow = 'hidden';
  }

  disconnectedCallback () {
    super.disconnectedCallback();
    document.body.style.overflow = 'initial';
  }

  render () {
    return html`
      <div class="dialogue-box">
        <img class="header-img" src="${this.event.image}" />
        <h1>${this.event.title}</h1>
      </div>
    `;
  }

}