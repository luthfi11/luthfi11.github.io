const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});

const linkId = ['tab-profile', 'tab-portfolio', 'tab-skills', 'tab-achievement'];
linkId.forEach((link) => {
  const linkElement = document.querySelector(`#${link}`);
  linkElement.addEventListener('click', (event) => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
  });
});
