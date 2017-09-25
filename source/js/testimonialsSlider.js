"use strict";

(function () {
  var slides = document.querySelectorAll(".testimonial");
  var navItems = document.querySelectorAll(".testimonials__nav-item");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].classList.remove("testimonial--show");
    navItems[currentSlide].classList.remove("testimonials__nav-item--active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("testimonial--show");
    navItems[currentSlide].classList.add("testimonials__nav-item--active");
  };

  function findRow(node) {
    var i = 1;
    while (node.previousSibling) {
      node = node.previousSibling;
      if (node.nodeType === 1) {
        i++;
      }
    }
    return i;
  };

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function (e) {
      clearInterval(slideInterval);
      var visibleSlide = document.querySelector(".testimonial--show");
      var currentNavItem = e.target;
      var navIndex = findRow(currentNavItem);
      currentSlide = slides[navIndex - 1];
      var activeNavItem = document.querySelector(".testimonials__nav-item--active");
      if (currentNavItem != activeNavItem) {
        activeNavItem.classList.remove("testimonials__nav-item--active");
        currentNavItem.classList.add("testimonials__nav-item--active");
      }
      if (currentSlide != visibleSlide) {
        visibleSlide.classList.remove("testimonial--show");
        currentSlide.classList.add("testimonial--show");
      }
    });
  };
})();
