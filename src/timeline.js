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
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .timeline-event {
        position: absolute;
        display: inline;
        transform: translate(-50%, 2rem);
        white-space: nowrap;
        padding: 1rem;
        background: #b71c1c;
        color: white;
        border-radius: 1rem;
      }
      .timeline-event:nth-child(2n) {
        transform: translate(-50%, -4.5rem);
      }
      .timeline {
        width: 720px;
        height: 1rem;
        background: #b71c1c;
      }
    `;
  }

  render () {
    let startInt = this.start.getTime();
    let endInt = this.end.getTime();
    let length = endInt - startInt;
    return html`
      <div class="timeline-container">
        <div class="timeline-events">
          ${this.items.map(item => {
            console.log(item);
            let percentage = (item.date.getTime() - startInt) / length;
            console.log(percentage);
            return html`
            <div class="timeline-event" style="left: ${720 * percentage}px">
              <span>${item.title}</span>
            </div>
          `})}
          <div class="timeline"></div>
        </div>
      </div>
    `;
  }

}