import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('ww-dialogue')
export default class Dialogue extends LitElement {

  @property({type: Object}) event;

  static get styles () {
    return css`
      .dialogue-box {
        box-sizing: border-box;
        background-color: #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 1rem;
      }
      .header-img {
        position: relative;
        top: -1rem;
        left: -1rem;
        width: calc(100% + 2rem);
        max-height: 66%;
        object-fit: cover;
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
    console.log(this.event);
    return html`
      <div class="dialogue-box">
        <img class="header-img" src="${this.event.image}" />
        <h1>${this.event.title}</h1>
        <h3><i class="date">${this.event.date.getUTCFullYear()}/${this.event.date.getUTCMonth()+1}/${this.event.date.getUTCDate()}</i></h3>
        <p>${this.event.body}</p>
      </div>
    `;
  }

}