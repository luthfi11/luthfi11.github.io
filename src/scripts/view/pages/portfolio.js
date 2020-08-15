import Data from '../../../DATA.json';
import GithubRepository from '../../data/github-repository';
import '../../component/portfolio-section';
import '../../component/loading-indicator';

class Portfolio {
  static async render() {
    return `<loading-indicator></loading-indicator>
            <h3>Portfolio</h3>
            <div id="portfolio"></div>
            <h3>More Portfolio</h3><br>
            <div id="github-user"></div>
            <div id="more-portfolio" class="wrapper-three"></div>`;
  }

  static async afterRender() {
    GithubRepository.getUser().then((user) => {
      document.querySelector('#github-user').innerHTML = this._showGithubProfile(user);
    });

    GithubRepository.getAllRepository().then((repo) => {
      document.querySelector('#more-portfolio').innerHTML = this._showAllRepository(repo);
    });

    const portfolioElement = document.createElement('portfolio-section');
    portfolioElement.className = 'wrapper margin-20';
    portfolioElement.portfolios = Data.portfolio;
    document.querySelector('#portfolio').appendChild(portfolioElement);

    const loadingElement = document.querySelector('loading-indicator');
    loadingElement.style.display = 'none';
  }

  static _showGithubProfile(user) {
    return `<div class="highlight">
                <img src="${user.avatar_url}" alt="${user.name}" class="circle-img-always" style="width: 100px"/>
                <b>${user.name}</b><br>
                @${user.login}<br>
                Github Public Repository : ${user.public_repos}<br><br>
                <a class="highlight-link" href="https://www.github.com/luthfi11" rel="noopener" target="_blank">View Github Profile</a>
            </div>`;
  }

  static _showAllRepository(repos) {
    let repositoryElement = '';
    repos.forEach((repo) => {
      if (repo.fork === false) {
        repositoryElement += `<a href="${repo.html_url}" target="_blank" rel="noopener">
                                 <div class="box-flat">
                                    <div class="box-body"><b>${repo.name}</b><br><br>${repo.description}</div>
                                    <div class="box-footer">${repo.language}</div>
                                 </div>
                              </a>`;
      }
    });
    return repositoryElement;
  }
}

export default Portfolio;
