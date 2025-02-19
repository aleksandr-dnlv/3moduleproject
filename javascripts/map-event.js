const overlayBtn = document.getElementById('trigger-event');
const resetBtn = document.getElementById('trigger-map');
const overlayImage = document.querySelector('.map-event');

overlayBtn.addEventListener('click', function() {
  overlayImage.style.zIndex = 1;
  overlayImage.classList.add('visible');
});

resetBtn.addEventListener('click', function() {
  overlayImage.classList.remove('visible');
  overlayImage.addEventListener('transitionend', () => {
  overlayImage.style.zIndex = 0;
  }, { once: true });
});