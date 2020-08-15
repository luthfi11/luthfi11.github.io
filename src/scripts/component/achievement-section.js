class AchievementSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set achievements(achievement) {
    this._achievements = achievement;
  }

  render() {
    let achievementElement = '';
    this._achievements.forEach((achievement) => {
      achievementElement += `<a href="${achievement.link}" target="_blank" rel="noopener"><div class="box">
                                <img class="lazyload" data-src="${achievement.image}" alt="${achievement.event}" />
                                <div class="body">
                                    <b>${achievement.rank}</b><br><br>
                                    ${achievement.event}<br>
                                    <small>${achievement.time}</small><br><br>
                                    ${achievement.description}
                                </div>
                             </div></a>`;
    });
    this.innerHTML = achievementElement;
  }
}

customElements.define('achievement-section', AchievementSection);
