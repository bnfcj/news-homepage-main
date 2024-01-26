'use strict'
class Header{
    addDropdownEvent(){
        const menuElement = document.querySelector('.nav__menu')
        const menuImageElements = document.querySelectorAll('.nav__menu img')
        const filterElement = document.querySelector('.body-filter')
        const dropdownElement = document.querySelector('.nav__links')
        menuElement.addEventListener('click', function(){
            menuImageElements.forEach(element=> element.classList.toggle('no-display'))
            filterElement.classList.toggle('body-filter--active')
            dropdownElement.classList.toggle('nav__links--mobile-expanded')
            dropdownElement.classList.toggle('nav__links--mobile')
        })
    }
}
const header = new Header()
header.addDropdownEvent()