import '../../component/education-section';
import '../../component/other-education-section';
import '../../component/experience-section';
import '../../component/loading-indicator';
import Data from '../../../DATA.json';

class Profile {
  static async render() {
    return `<loading-indicator></loading-indicator>
            <h3>Experience</h3>
            <div id="experience"></div>
            <h3>Education</h3>
            <div id="education"></div>
            <h3>Other Education</h3>
            <div id="other-education"></div>`;
  }

  static async afterRender() {
    const educationElement = document.createElement('education-section');
    educationElement.className = 'wrapper';
    educationElement.education = Data.education;
    document.querySelector('#education').appendChild(educationElement);

    const otherEducationElement = document.createElement('oeducation-section');
    otherEducationElement.className = 'wrapper';
    otherEducationElement.education = Data.other_education;
    document.querySelector('#other-education').appendChild(otherEducationElement);

    const experienceElement = document.createElement('experience-section');
    experienceElement.className = 'wrapper';
    experienceElement.experience = Data.experience;
    document.querySelector('#experience').appendChild(experienceElement);

    const loadingElement = document.querySelector('loading-indicator');
    loadingElement.style.display = 'none';
  }
}

export default Profile;
