class EducationSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set education(edu) {
    this._education = edu;
  }

  render() {
    let educationElement = '';
    this._education.forEach((edu) => {
      educationElement += `<div class="box box-edu" style="padding: 12px">
                            <img class="lazyload edu" data-src="${edu.logo}" alt="${edu.name}" />
                            <p>
                                <b>${edu.name}</b><br><br>
                                ${edu.major} - ${edu.degree}<br>
                                <small>${edu.period}</small>
                            </p>
                           </div>`;
    });
    this.innerHTML = educationElement;
  }
}

customElements.define('education-section', EducationSection);
