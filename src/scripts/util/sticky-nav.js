const header = document.querySelector('app-bar');
const sticky = 660;

const stickyNav = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

window.onscroll = () => {
  stickyNav();
};
