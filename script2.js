document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const themeSwitch = document.querySelector(".theme-switch");
  const logo = document.querySelector(".logo");
  const themeIcon = document.getElementById("theme-icon");
  const arrow1 = document.getElementById("arrow1");
  const arrow2 = document.getElementById("arrow2");
  const arrow3 = document.getElementById("arrow3");
  const arrow4 = document.getElementById("arrow4");
  const arrow5 = document.getElementById("arrow5");
  const arrow6 = document.getElementById("arrow6");
  const body = document.body;
  const html = document.html;
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      themeIcon.src = "images/dark-mode.png";
      logo.src = "images/melns-logo.png";
      arrow1.src = "images/bulta-melna-2.png";
      arrow2.src = "images/bulta-melna-2.png";
      arrow3.src = "images/bulta-melna-2.png";
      arrow4.src = "images/bulta-melna-2.png";
      arrow5.src = "images/bulta-melna-2.png";
      arrow6.src = "images/bulta-melna-2.png";
      // Save dark mode state to Session Storage
      sessionStorage.setItem("darkMode", "true");
    } else {
      themeIcon.src = "images/light-mode.png";
      logo.src = "images/balts-logo.png";
      arrow1.src = "images/bulta-balta-2.png";
      arrow2.src = "images/bulta-balta-2.png";
      arrow3.src = "images/bulta-balta-2.png";
      arrow4.src = "images/bulta-balta-2.png";
      arrow5.src = "images/bulta-balta-2.png";
      arrow6.src = "images/bulta-balta-2.png";
      // Remove dark mode state from Session Storage
      sessionStorage.removeItem("darkMode");
    }
  };

  // Check if dark mode is enabled in Session Storage
  const isDarkModeEnabled = sessionStorage.getItem("darkMode") === "true";
  if (isDarkModeEnabled) {
    body.classList.add("dark-mode");
    themeIcon.src = "images/dark-mode.png";
    logo.src = "images/melns-logo.png";
    arrow1.src = "images/bulta-melna-2.png";
    arrow2.src = "images/bulta-melna-2.png";
    arrow3.src = "images/bulta-melna-2.png";
    arrow4.src = "images/bulta-melna-2.png";
    arrow5.src = "images/bulta-melna-2.png";
    arrow6.src = "images/bulta-melna-2.png";
  }

  // Add click event listener to theme switch
  themeSwitch.addEventListener("click", () => {
    toggleDarkMode();
  });

  // Add click event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Update active class on clicked link
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
