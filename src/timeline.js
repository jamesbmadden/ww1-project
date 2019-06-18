import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('ww-timeline')
export default class Timeline extends LitElement {

  @property({type: Date}) start = new Date(1900, 0, 0);
  @property({type: Date}) end = new Date(2000, 0, 0);
  @property({type: Array}) items = [];

  static get styles () {
    return css`
      :host {
        transition: opacity 0.6s;
        transition-delay: 0.2s;
      }
      :host([fade-out]) {
        opacity: 0;
        transition-delay: 0s;
      }
      .timeline-container {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 2048px;
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
        max-width: 180px;
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
        z-index: 1; /* Render shadow after pseudo child of elements below on timeline */
      }
      .timeline-event:nth-child(2n)::after {
        top: auto;
        bottom: -4rem;
      }
      .timeline {
        width: 2048px;
        height: 1rem;
        background: white;
      }
      img {
        position: relative;
        display: block;
        width: 180px;
        border-radius: 1rem;
      }
      @media (max-width: 2048px) {
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
            <div class="timeline-event" style="left: ${2048 * percentage}px">
              <p @click=${() => {
                let dialogue = document.createElement('ww-dialogue');
                dialogue.event = item;
                document.body.appendChild(dialogue);
              }}>
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