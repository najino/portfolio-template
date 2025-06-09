document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;

  // Load saved theme preference or set default to dark
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || !savedTheme) {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  const toggleSwitch = document.querySelector(".toggle-switch");
  const lightOption = document.getElementById("light");
  const darkOption = document.getElementById("dark");
  const slider = document.querySelector(".toggle-slider");

  // Set toggleSwitch UI based on saved theme
  if (htmlElement.classList.contains("dark")) {
    darkOption.classList.add("active");
    lightOption.classList.remove("active");
    slider.style.transform = "translateX(0)";
  } else {
    lightOption.classList.add("active");
    darkOption.classList.remove("active");
    slider.style.transform = "translateX(100%)";
  }

  toggleSwitch.addEventListener("click", () => {
    if (darkOption.classList.contains("active")) {
      darkOption.classList.remove("active");
      lightOption.classList.add("active");
      slider.style.transform = "translateX(100%)";
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      lightOption.classList.remove("active");
      darkOption.classList.add("active");
      slider.style.transform = "translateX(0)";
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Mobile menu overlay toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  if (mobileMenuButton && mobileMenuOverlay && mobileMenuClose) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("hide");
      mobileMenuOverlay.classList.add("show");
      mobileMenuOverlay.setAttribute("aria-hidden", "false");
    });

    mobileMenuClose.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("show");
      mobileMenuOverlay.classList.add("hide");
      mobileMenuOverlay.setAttribute("aria-hidden", "true");
    });
  }
});
