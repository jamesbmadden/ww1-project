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
      .timeline-events {
        position: relative;
      }
      .timeline-event {
        position: absolute;
        display: inline;
        transform: translate(-50%);
        white-space: nowrap;
        top: 4rem;
      }
      .timeline-event span {
        padding: 1rem;
        background: white; /* #b71c1c */
        color: #222;
        border-radius: 1rem;
        z-index: 1;
      }
      .timeline-event::after {
        content: "";
        position: absolute;
        display: inline-block;
        height: 3.5rem;
        width: 1rem;
        top: -4rem;
        background: white;
        left: calc(50% - 0.5rem);
      }
      .timeline-event:nth-child(2n) {
        transform: translate(-50%);
        top: auto;
        bottom: 4rem;
      }
      .timeline-event:nth-child(2n)::after {
        top: auto;
        bottom: -4rem;
      }
      .timeline {
        width: 720px;
        height: 1rem;
        background: white;
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