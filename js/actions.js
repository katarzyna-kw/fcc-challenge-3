let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let anchors = document.querySelectorAll('.anchor')

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    console.log('clicked')
  });

let length=anchors.length;
for (let i=0; i<length; i++) {
  anchors[i].addEventListener('click', function () {
    mainNav.classList.remove('active');
  }
)}
