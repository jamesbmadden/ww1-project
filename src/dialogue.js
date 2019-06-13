import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('ww-dialogue')
export default class Dialogue extends LitElement {

  @property({type: String}) event;

  static get styles () {
    return css`
      
    `;
  }

  render () {
    return html`
      <div class="dialogue-box">
        <h1>${this.event}</h1>
        <slot></slot>
      </div>
    `;
  }

}