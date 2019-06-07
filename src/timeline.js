import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('ww-timeline')
export default class Timeline extends LitElement {

  @property({type: Date}) start = new Date(1900, 0, 0);
  @property({type: Date}) end = new Date(2000, 0, 0);
  @property({type: Array}) items = [];

  static get styles () {
    return css`
      .timeline-container {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 720px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }

  render () {
    return html`
      <div class="timeline-container">
        <div class="timeline-events">
          ${this.items.map(item => html`
            <div class="timeline-event">
              <p>${item.title}</p>
            </div>
          `)}
        </div>
      </div>
    `;
  }

}