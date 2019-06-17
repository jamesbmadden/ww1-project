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
      }
      .header-img {
        position: relative;
        width: 100%;
        height: 66%;
        object-fit: cover;
      }
      .content {
        width: calc(100% - 2rem);
        margin: auto;
        max-width: 720px;
      }
      .body {
        text-align: justify;
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
      <style>
        .header-img {
          background: url(${this.event.image});
        }
      </style>
      <div class="dialogue-box">
        <div class="header-img"></div>
        <article class="content">
          <h1>${this.event.title}</h1>
          <h3><i class="date">${this.event.date.getUTCFullYear()}/${this.event.date.getUTCMonth()+1}/${this.event.date.getUTCDate()}</i></h3>
          <p class="body">${this.event.body}</p>
        </article>
      </div>
    `;
  }

}