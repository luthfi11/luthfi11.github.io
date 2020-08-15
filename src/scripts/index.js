import 'regenerator-runtime';
import './component/header-cover';
import './component/app-bar';
import './util/sticky-nav';
import '../styles/main.css';
import '../styles/navigation.css';
import './util/navigation-drawer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import registerSW from './util/register-sw';
import Main from './view/main';

document.addEventListener('DOMContentLoaded', async () => {
  registerSW();
  await Main.renderPage();
});

window.addEventListener('hashchange', async () => {
  await Main.renderPage();
});
