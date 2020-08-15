class SkillsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set skills(skill) {
    this._skills = skill;
  }

  render() {
    let skillsElement = '';
    this._skills.forEach((skill) => {
      let skillListElement = '';
      skill.list.forEach((item) => {
        skillListElement += `<li>${item}</li>`;
      });

      skillsElement += `<div class="horizontal-box">
                            <div class="box-cover">
                                <img class="lazyload" data-src="${skill.icon}" alt="${skill.name}" />
                                <b>${skill.name}</b>
                            </div>
                            <div class="content">
                                <ul>
                                    ${skillListElement}
                                </ul>
                            </div>
                           </div>`;
    });
    this.innerHTML = skillsElement;
  }
}

customElements.define('skills-section', SkillsSection);
