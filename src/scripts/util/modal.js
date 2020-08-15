const modalScreen = (modalId, buttonId, spanId) => {
  const modal = document.getElementById(modalId);
  const btn = document.getElementById(buttonId);
  const span = document.getElementById(spanId);
  const body = document.querySelector('body');

  btn.onclick = () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
  };

  span.onclick = () => {
    modal.style.display = 'none';
    body.style.overflow = 'scroll';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.style.overflow = 'scroll';
    }
  };
};

export default modalScreen;
