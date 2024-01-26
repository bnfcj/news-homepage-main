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
    function resize() {
      const dropdownElement = document.querySelector(".nav__links");
      const filterElement = document.querySelector(".body-filter");
      if (
        window.screen.width >= 600 &&
        !dropdownElement.classList.contains("nav__links--desktop")
      ) {
        dropdownElement.classList.add("nav__links--desktop");
        dropdownElement.classList.remove("nav__links--mobile");
        filterElement.classList.remove("body-filter--active");
        dropdownElement.classList.remove("nav__links--mobile-expanded");
      } else if (
        window.screen.width < 600 &&
        !dropdownElement.classList.contains("nav__links--mobile")
      ) {
        console.log("yo");
        dropdownElement.classList.add("nav__links--mobile");
        dropdownElement.classList.remove("nav__links--desktop");
      }
    }
    window.addEventListener("resize", resize, false);
    resize();
  }
}
const header = new Header();
header.addDropdownEvent();
header.addResizeEvent();
