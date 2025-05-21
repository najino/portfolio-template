document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const htmlElement = document.documentElement;

    function updateButton() {
      if (htmlElement.classList.contains('dark')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
      } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
      }
    }

    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      htmlElement.classList.add('dark');
    }
    updateButton();

    toggleButton.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateButton();
    });

});

        const toggleSwitch = document.querySelector('.toggle-switch');
        const lightOption = document.getElementById('light');
        const darkOption = document.getElementById('dark');
        const slider = document.querySelector('.toggle-slider');

        toggleSwitch.addEventListener('click', () => {
            if (lightOption.classList.contains('active')) {
                lightOption.classList.remove('active');
                darkOption.classList.add('active');
                slider.style.transform = 'translateX(100%)';
            } else {
                darkOption.classList.remove('active');
                lightOption.classList.add('active');
                slider.style.transform = 'translateX(0)';
            }
        });