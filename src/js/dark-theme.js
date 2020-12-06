import refs from './refs.js';
const { body } = refs;
const { toggle } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT } = Theme;
const { DARK } = Theme;

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    body.setAttribute('class', DARK);
    localStorage.setItem('Theme', DARK);
  } else {
    body.setAttribute('class', LIGHT);
    localStorage.setItem('Theme', LIGHT);
  }
});

if (localStorage.Theme == LIGHT || localStorage.Theme === null) {
  toggle.checked = false;
  body.setAttribute('class', LIGHT);
} else if (localStorage.Theme == DARK) {
  toggle.checked = true;
  body.setAttribute('class', DARK);
}
