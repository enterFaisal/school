document.addEventListener("DOMContentLoaded", function () {
  // Help/Support Button Functionality
  const helpButton = document.getElementById("helpButton");

  helpButton.addEventListener("click", function () {
    // Replace this with your desired help/support action
    alert(
      "Help button clicked. This would ideally open a support chat or redirect to a help page."
    );
    // Example redirection (if you have a help page):
    // window.location.href = '/help';
  });

  const languageBtn = document.getElementById("languageBtn");
  const languageSpan = languageBtn.querySelector("span");
  let currentLang = currentLangfunc();

  function currentLangfunc() {
    if (document.documentElement.lang === "ar") {
      return "AR";
    } else {
      return "EN";
    }
  }

  languageBtn.addEventListener("click", () => {
    if (currentLang === "EN") {
      // go to ar.html
      window.location.href = "index_ar.html";
    } else {
      // go to en.html
      window.location.href = "index.html";
    }
  });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  }

  // Close menu when window is resized above mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
    }
  });
});
