import lottie from 'lottie-web';
import animationData from '../assets/animations/animation.json';

lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData
});
