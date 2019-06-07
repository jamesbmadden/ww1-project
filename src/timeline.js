import { LitElement, html, customElement, property, css } from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

@customElement('ww-timeline')
export default class Timeline extends LitElement {

  @property({type: Date}) start;
  @property({type: Date}) end;
  @property({type: Array}) items;

  static get styles () {
    return css`
      .timeline-container {
        position: relative;
        height: 100%;
        width: 100%;
        overflow-x: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .timeline-inner {
        max-width: 720px;
        width: 100%;
      }
    `;
  }

  render () {
    return html`
      <div class="timeline-container">
        <div class="timeline-inner">
          <p>Coming Soon</p>
        </div>
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