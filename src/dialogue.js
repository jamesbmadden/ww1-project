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
        position: absolute;
        width: 100%;
        height: 66%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
      .header-img::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, #333);
      }
      .content {
        width: calc(100% - 2rem);
        margin: auto;
        max-width: 720px;
        position: relative;
        top: 66%;
      }
      .body {
        text-align: justify;
      }
      .title {
        font-size: 4rem;
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        z-index: 2;
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
        <header class="header-img">
          <h1 class="title">${this.event.title}</h1>
        </header>
        <article class="content">
          <p class="body">${this.event.body}</p>
        </article>
      </div>
    `;
  }

}