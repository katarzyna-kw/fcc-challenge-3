let mainNav = document.getElementById("js-menu");
let toggle = document.getElementById("js-navbar-toggle");

toggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });

ScrollReveal().reveal('h-reveal');