import '../../component/achievement-section';
import '../../component/loading-indicator';
import Data from '../../../DATA.json';

class Achievement {
  static async render() {
    return `<loading-indicator></loading-indicator>
            <h3>Achievement</h3>
            <div id="achievement"></div>`;
  }

  static async afterRender() {
    const achievementElement = document.createElement('achievement-section');
    achievementElement.className = 'wrapper-one';
    achievementElement.achievements = Data.achievement;
    document.querySelector('#achievement').appendChild(achievementElement);

    const loadingElement = document.querySelector('loading-indicator');
    loadingElement.style.display = 'none';
  }
}

export default Achievement;
