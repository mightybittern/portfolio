import lottie from 'lottie-web';

lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/animation.json', // update this path
});
