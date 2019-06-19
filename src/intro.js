import { LitElement, html, customElement, css } from 'lit-element';

@customElement('ww-intro')
export default class Intro extends LitElement {

  connectedCallback () {
    super.connectedCallback();
    document.body.style.overflow = 'hidden';
  }

  disconnectedCallback () {
    super.disconnectedCallback();
    document.body.style.overflow = 'initial';
  }

  static get styles () {
    return css`
      .intro-dialogue {
        z-index: 5;
        background: rgba(32, 32, 32, .99);
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: opacity 0.4s;
      }
      p, h1 {
        margin: 0;
      }
      h1.main {
        font-size: 4rem;
      }
      h1.pretitle {
        font-weight: 400;
      }
      p {
        font-size: 1.25rem;
      }
      button {
        font-size: 1.25rem;
        padding: 1rem;
        box-sizing: border-box;
        display: block;
        height: 4rem;
        border-radius: 2rem;
        background: transparent;
        border: 0;
        margin-top: 5rem;
        cursor: pointer;
        min-width: 8rem;
        border: white solid 2px;
        color: white;
        transition: background 0.4s, color 0.4s;
      }
      button:hover {
        background: white;
        color: #222;
      }
    `;
  }

  closeDialogue () {
    this.shadowRoot.querySelector('.intro-dialogue').style.opacity = '0';
    setTimeout(() => {
      this.parentElement.removeChild(this);
    }, 400);
  }

  render () {
    return html`
      <div class="intro-dialogue">
        <h1 class="pretitle"><i>Timeline of</i></h1>
        <h1 class="main">Canada's Involvement in WW1</h1>
        <p><i>Adelaide, Aishwarya, Emmett, Iliad, James</i></p>
        <button @click=${() => this.closeDialogue()}>View</button>
      </div>
    `;
  }

}