let _MAIN = document.querySelector('main'),
N = +_MAIN.style.getPropertyValue('--n');

let k = +_MAIN.style.getPropertyValue('--k');

addEventListener('click', e => {
  let _t = e.target;

  if (_t.classList.contains('nav')) _MAIN.style.setProperty('--k', k = (k + 1) % N);
});