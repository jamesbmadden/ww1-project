import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('ww-timeline')
export default class Timeline extends LitElement {

  @property({type: Date}) start;
  @property({type: Date}) end;
  @property({type: Array}) items;

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
        <p>Coming Soon</p>
      </div>
    `;
  }

}

@customElement('ww-timeline-item')
export class TimelineItem extends LitElement {

  render () {
    return html`
    
    `;
  }

}