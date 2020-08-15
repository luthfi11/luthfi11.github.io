import UrlParser from '../routes/url-parser';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer">
            <ul>
                <li><a href="#/profile" id="tab-profile">Profile</a></li>
                <li><a href="#/portfolio" id="tab-portfolio">Portfolio</a></li>
                <li><a href="#/skills" id="tab-skills">Skills & Certificate</a></li>
                <li><a href="#/achievement" id="tab-achievement">Achievement</a></li>
            </ul>
        </nav>
        <button id="hamburger">☰</button>`;

    const url = UrlParser.parseActiveUrlWithCombiner();
    switch (url) {
      case '/profile':
        this.querySelector('#tab-profile').classList.add('active');
        break;
      case '/portfolio':
        this.querySelector('#tab-portfolio').classList.add('active');
        break;
      case '/skills':
        this.querySelector('#tab-skills').classList.add('active');
        break;
      case '/achievement':
        this.querySelector('#tab-achievement').classList.add('active');
        break;
      default:
        this.querySelector('#tab-profile').classList.add('active');
    }

    const tabItems = this.querySelectorAll(
      'nav li a',
    );

    tabItems.forEach((tabItem) => {
      tabItem.addEventListener('click', (event) => {
        const selectedItems = this.querySelectorAll('.active');

        if (selectedItems.length > 0) {
          selectedItems[0].classList.remove('active');
        }

        event.target.classList.add('active');
      });
    });
  }
}

customElements.define('app-bar', AppBar);
