import Profile from '../view/pages/profile';
import Skills from '../view/pages/skills';
import Achievement from '../view/pages/achievement';
import Portfolio from '../view/pages/portfolio';

const routes = {
  '/': Profile,
  '/profile': Profile,
  '/portfolio': Portfolio,
  '/skills': Skills,
  '/achievement': Achievement,
};

export default routes;
