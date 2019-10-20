var toggleClose = document.querySelector(".main-nav__toggle");
var toggleOpen = document.querySelector(".page-header__toggle");
var mainNav = document.querySelector(".main-nav");
var header = document.querySelector(".page-header");
var headerNav = document.querySelector(".page-header__wrapper");

mainNav.classList.remove('main-nav--nojs');
header.classList.add("page-header--no-nav");
headerNav.classList.add("page-header__wrapper--no-nav");

toggleOpen.addEventListener("click", function (evt) {
 evt.preventDefault();
 mainNav.classList.add("main-nav--opened");
 header.classList.remove("page-header--no-nav");
 headerNav.classList.remove("page-header__wrapper--no-nav");
});

toggleClose.addEventListener("click", function (evt) {
 evt.preventDefault();
 mainNav.classList.remove("main-nav--opened");
 header.classList.add("page-header--no-nav");
 headerNav.classList.add("page-header__wrapper--no-nav");
});
