import '../../styles/modal.css';
import modalScreen from '../util/modal';

class PortfolioSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set portfolios(portfolio) {
    this._portfolios = portfolio;
  }

  render() {
    let portfolioElement = '';
    const modalId = [];
    const buttonId = [];
    const spanId = [];

    this._portfolios.forEach((portfolio) => {
      let playstoreIcon = '';
      if (portfolio.playstore !== undefined) {
        playstoreIcon = `<a href="${portfolio.playstore}" class="detail-link" rel="noopener" target="_blank">
                            <img class="lazyload mini-icon" data-src="/images/icon/playstore.png" alt="Playstore"/>
                         </a>`;
      }

      let screenshotElement = '';
      portfolio.screenshot.forEach((image) => {
        screenshotElement += `<img class="lazyload" data-src="${image}" alt="${portfolio.app_name}" />`;
      });

      portfolioElement += `<div class="box-flat">
                                <b>${portfolio.app_name} (${portfolio.year})</b><br><br>
                                <div class="ellipse">${portfolio.description}</div> 
                                <div class="column-2">
                                    <button class="detail-link bordered" id="btn-${portfolio.app_name}">See Details</button>
                                    ${playstoreIcon}
                                </div> 
                           </div>

                            <div id="modal-${portfolio.app_name}" class="modal">
                              <div class="modal-content">
                                <span id="close-${portfolio.app_name}" class="close">x</span>
                                <div class="modal-title">${portfolio.app_name}</div>
                                <p>Release Year : ${portfolio.year}<br><br>${portfolio.description}</p>
                                <div style="text-align: center">
                                    ${playstoreIcon}<br>
                                    <a href="${portfolio.github}" class="detail-link bordered" target="_blank" rel="noopener" style="margin-top: 8px; font-size: 14px">
                                        View Code on Github
                                    </a>
                                </div> 
                                <div class="scroll-image">
                                    ${screenshotElement}
                                </div>
                              </div>
                            </div>`;

      modalId.push(`modal-${portfolio.app_name}`);
      buttonId.push(`btn-${portfolio.app_name}`);
      spanId.push(`close-${portfolio.app_name}`);
    });
    this.innerHTML = portfolioElement;
    for (let i = 0; i < modalId.length; i++) {
      modalScreen(modalId[i], buttonId[i], spanId[i]);
    }
  }
}

customElements.define('portfolio-section', PortfolioSection);
