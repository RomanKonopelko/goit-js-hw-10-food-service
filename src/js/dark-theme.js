import refs from './refs.js';
const { body, toggle } = refs;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    body.setAttribute('class', DARK);
    localStorage.setItem('Theme', DARK);
  } else {
    body.setAttribute('class', LIGHT);
    localStorage.setItem('Theme', LIGHT);
  }
});

if (localStorage.Theme === DARK) {
  toggle.checked = true;
  body.setAttribute('class', DARK);
} else {
  toggle.checked = false;
  body.setAttribute('class', LIGHT);
}
