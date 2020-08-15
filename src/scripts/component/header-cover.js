class HeaderCover extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
        <img class="lazyload user-pict" data-src="./images/user.png" alt="Luthfi"/>
        <h1 class="jumbotron-title"><b>LUTHFI</b> ALFARISI</h1>
        <h2 class="jumbotron-subtitle">Google Certified Associate Android Developer</h2>
        <b>Bandung, West Java, Indonesia</b>
        <br><br><br>
        <a href="mailto:luthfialfarizi98@gmail.com" class="mail-button">Contact Me</a>
        
        <ul>
           <li>
            <a href="https://www.linkedin.com/in/luthfi-alfarisi/" target="_blank" rel="noopener">
                <img src="./images/icon/linkedin.png" alt="Linkedin">
            </a>
           </li>
           <li>
            <a href="https://www.github.com/luthfi11" target="_blank" rel="noopener">
                <img src="./images/icon/github.svg" alt="Github">
            </a>
           </li>
           <li>
            <a href="https://www.medium.com/@luthfi11" target="_blank" rel="noopener">
                <img src="./images/icon/medium.webp" alt="Medium">
            </a>
           </li>
        </ul>
    </div>`;
    document.querySelector('.jumbotron').style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), #111111), url('./images/cover.jpg')";
  }
}

customElements.define('header-cover', HeaderCover);
