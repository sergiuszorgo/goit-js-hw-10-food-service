const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    toggleSwitch: document.querySelector('.theme-switch__toggle')
};

refs.toggleSwitch.addEventListener('change', e => {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
    }
    else {
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'light-theme');
    }
});
