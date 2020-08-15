class ExperienceSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set experience(exp) {
    this._experience = exp;
  }

  render() {
    let experienceElement = '';
    this._experience.forEach((exp) => {
      experienceElement += `<div class="box box-exp">
                            <div class="logo-bg"><img class="lazyload img-exp" data-src="${exp.logo}" alt="${exp.company}"/></div>
                            <p>
                                <b>${exp.position}</b><br>
                                ${exp.company}<br>
                                <small>${exp.period}<br><br>
                                ${exp.job_description}</small>
                            </p>
                            </div>`;
    });

    this.innerHTML = experienceElement;
  }
}

customElements.define('experience-section', ExperienceSection);
