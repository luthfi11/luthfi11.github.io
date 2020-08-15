import '../../component/skills-section';
import '../../component/certificate-section';
import '../../component/loading-indicator';
import Data from '../../../DATA.json';

class Skills {
  static async render() {
    return `<loading-indicator></loading-indicator>
            <h3>Skills</h3>
            <div id="skills"></div>
            <h3>Certificate of Expertise</h3><br>
            <div class="highlight">
                <img src="https://luthfi.web.app/aad.png" alt="Associate Android Developer" />
                <a class="highlight-link-default" href="https://www.credential.net/7337afe7-9d00-42a1-8ed4-31f6c4cb3909?_ga=2.102458754.246564538.1580893513-1283960652.1580893513" target="_blank" rel="noopener">
                    Associate Android Developer
                </a><br>
                <i>Google Developers</i><br>
                <small>November 2019 - November 2022</small>
            </div>
            <div id="certificate"></div>`;
  }

  static async afterRender() {
    const skillsElement = document.createElement('skills-section');
    skillsElement.className = 'wrapper';
    skillsElement.skills = Data.skills;
    document.querySelector('#skills').appendChild(skillsElement);

    const certificateElement = document.createElement('certificate-section');
    certificateElement.className = 'wrapper';
    certificateElement.certificates = Data.certificate;
    document.querySelector('#certificate').appendChild(certificateElement);

    const loadingElement = document.querySelector('loading-indicator');
    loadingElement.style.display = 'none';
  }
}

export default Skills;
