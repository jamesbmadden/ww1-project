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
      .timeline-event p {
        margin: -0.5rem;
        padding: 1rem;
        background: white; /* #b71c1c */
        color: #222;
        border-radius: 1rem;
        z-index: 1;
        text-align: center;
        box-shadow: 0px 3px 6px rgba(127, 127, 127, 0.5);
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
      }
      .timeline-event p:hover {
        transform: scale(1.3);
        box-shadow: 0px 6px 6px rgba(127, 127, 127, 0.5);
      }
      .date {
        font-size: 0.75rem;
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
        z-index: -1;
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
      img {
        position: relative;
        display: block;
        width: 180px;
      }
      @media (max-width: 720px) {
        .timeline-container {
          margin: 0 8rem;
        }
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
            let percentage = (item.date.getTime() - startInt) / length;
            return html`
            <div class="timeline-event" style="left: ${720 * percentage}px">
              <p>
                <img src="${item.image}" width="180" /><br>
                ${item.title}<br>
                <i class="date">${item.date.getUTCFullYear()}/${item.date.getUTCMonth()+1}/${item.date.getUTCDate()}</i>
              </p>
            </div>
          `})}
          <div class="timeline"></div>
        </div>
      </div>
    `;
  }

}