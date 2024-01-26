"use strict";
class Header {
  addDropdownEvent() {
    const menuElement = document.querySelector(".nav__menu");
    const filterElement = document.querySelector(".body-filter");
    const menuImageElements = document.querySelectorAll(".nav__menu img");
    const dropdownElement = document.querySelector(".nav__links");
    menuElement.addEventListener("click", function () {
      menuImageElements.forEach((element) =>
        element.classList.toggle("no-display")
      );
      filterElement.classList.toggle("body-filter--active");
      dropdownElement.classList.toggle("nav__links--mobile-expanded");
      dropdownElement.classList.toggle("nav__links--mobile");
    });
  }
  addResizeEvent() {
    const dropdownElement = document.querySelector(".nav__links");
    const menuImageElements = document.querySelectorAll(".nav__menu img");
    const filterElement = document.querySelector(".body-filter");
    if (window.screen.width >= 600) {
      dropdownElement.classList.remove("nav__links--mobile");
    }
    function resize() {
      dropdownElement.classList.add("nav__links--mobile");
      if (window.screen.width >= 600) {
        menuImageElements.forEach((element, index) => {
          if (index === 0) {
            element.classList.remove("no-display");
          } else {
            element.classList.add("no-display");
          }
        });
        filterElement.classList.remove("body-filter--active");
        dropdownElement.classList.remove("nav__links--mobile-expanded");

        dropdownElement.classList.remove("nav__links--mobile");
      }
    }
    window.addEventListener("resize", resize, false);
  }
}
const header = new Header();
header.addDropdownEvent();
header.addResizeEvent();
