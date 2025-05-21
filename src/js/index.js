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

    // Add blurred colorful circles to background
    const backgroundCirclesContainer = document.getElementById('background-circles');

    const circlesData = [
      { className: 'background-circle-1' },
      { className: 'background-circle-2' },
      { className: 'background-circle-3' },
      { className: 'background-circle-4' },
    ];

    circlesData.forEach(data => {
      const circle = document.createElement('div');
      circle.classList.add('background-circle', data.className);
      backgroundCirclesContainer.appendChild(circle);
    });

    // Restore previous dynamic glow effect on .bento divs
    const bentos = document.querySelectorAll('.bento');

    bentos.forEach(bento => {
      bento.addEventListener('mousemove', (e) => {
        const rect = bento.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate percentage position of mouse within the div
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Calculate glow intensity based on distance from center (optional)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = Math.abs(x - centerX);
        const distY = Math.abs(y - centerY);
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        const dist = Math.sqrt(distX * distX + distY * distY);
        const glowIntensity = 1 - dist / maxDist; // closer to center = higher intensity

        // Update CSS variables for glow intensity and mouse position
        bento.style.setProperty('--glow-intensity', glowIntensity.toFixed(2));
        bento.style.setProperty('--mouse-x', xPercent + '%');
        bento.style.setProperty('--mouse-y', yPercent + '%');
      });

      bento.addEventListener('mouseleave', () => {
        // Reset glow intensity and mouse position on mouse leave
        bento.style.setProperty('--glow-intensity', 0);
        bento.style.setProperty('--mouse-x', '50%');
        bento.style.setProperty('--mouse-y', '50%');
      });
    });
});
