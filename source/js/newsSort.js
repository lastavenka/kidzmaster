"use strict";

(function () {
  var newsList = document.querySelector(".news__list");
  var news = document.querySelectorAll(".news-item");
  var newsNav = document.querySelector(".news__nav");
  var newsNavBulletin = document.querySelector(".news__nav-link--bulletin");
  var newsNavMedia = document.querySelector(".news__nav-link--media");

  var showAllNews = function () {
    for (var i = 0; i < news.length; i++) {
      news[i].style.display = "block";
    }
    newsList.classList.remove("news__list--sorted");
  };

  var sortNews = function (filter) {
    for (var i = 0; i < news.length; i++) {
      if (news[i].classList.contains(filter)) {
        news[i].style.display = "block";
      } else news[i].style.display = "none";
    }
  };

  newsNav.addEventListener("click", function (e) {
    e.preventDefault();
    var currentNavLink = e.target;
    var activeNavLink = document.querySelector(".news__nav-link--active");
    if (currentNavLink != activeNavLink) {
      activeNavLink.classList.remove("news__nav-link--active");
      currentNavLink.classList.add("news__nav-link--active");
    }
    if (currentNavLink == newsNavMedia) {
      sortNews("news-item--media");
      newsList.classList.add("news__nav--sorted");
    } else {
      if (currentNavLink == newsNavBulletin) {
        sortNews("news-item--bulletin");
        newsList.classList.add("news__list--sorted");
      } else {
        showAllNews();
      }
    }
  });
})();
