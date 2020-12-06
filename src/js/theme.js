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
        refs.body.classList.toggle(Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
    }
    else {
        refs.body.classList.toggle(Theme.LIGHT);
        localStorage.setItem('theme', 'light-theme');
    }
});

function switchStatus() {
    const status = localStorage.getItem('theme');
    if (status === 'dark-theme') {
        refs.body.classList.add(Theme.DARK);
        refs.toggleSwitch.checked = true;
    }

    if (status === 'light-theme') {
        refs.body.classList.add(Theme.LIGHT);
        refs.toggleSwitch.checked = false;
    }
};
switchStatus();
