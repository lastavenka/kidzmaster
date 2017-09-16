"use strict";

(function () {
  var hamburger = document.querySelector(".hamburger");
  var mainNav = document.querySelector(".main-nav");

  hamburger.addEventListener("click", function () {
    mainNav.classList.toggle("main-nav--open");
    hamburger.classList.toggle("hamburger--open");
  });
})();
