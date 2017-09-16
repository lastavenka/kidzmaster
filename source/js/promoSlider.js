"use strict";

(function () {
  var slides = document.querySelectorAll(".promo-slider__item");
  var navItems = document.querySelectorAll(".promo-slider__nav-item");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].classList.remove("promo-slider__item--show");
    navItems[currentSlide].classList.remove("promo-slider__nav-item--active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("promo-slider__item--show");
    navItems[currentSlide].classList.add("promo-slider__nav-item--active");
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
      var visibleSlide = document.querySelector(".promo-slider__item--show");
      var currentNavItem = e.target;
      var navIndex = findRow(currentNavItem);
      currentSlide = slides[navIndex - 1];
      var activeNavItem = document.querySelector(".promo-slider__nav-item--active");
      if (currentNavItem != activeNavItem) {
        activeNavItem.classList.remove("promo-slider__nav-item--active");
        currentNavItem.classList.add("promo-slider__nav-item--active");
      }
      if (currentSlide != visibleSlide) {
        visibleSlide.classList.remove("promo-slider__item--show");
        currentSlide.classList.add("promo-slider__item--show");
      }
    });
  };
})();
