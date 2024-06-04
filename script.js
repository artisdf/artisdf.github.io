document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const themeSwitch = document.querySelector(".theme-switch");
    const logo = document.querySelector(".logo");
    const mainLogo = document.getElementById("main-logo");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      });
    });
  
    themeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        themeIcon.src = "images/dark mode.png";
        logo.src = "images/melns logo.png";
        mainLogo.src = "images/main_logo_melns.png";
      } else {
        themeIcon.src = "images/light mode.png";
        logo.src = "images/balts logo.png";
        mainLogo.src = "images/main_logo_balts.png";
      }
    });
  });