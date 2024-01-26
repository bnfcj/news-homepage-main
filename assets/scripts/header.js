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
    addResizeEvent(){
        const dropdownElement = document.querySelector('.nav__links')
        window.addEventListener('resize', function(){
            if(this.window.innerWidth <600 && !dropdownElement.classList.contains('nav__links--mobile')){
                dropdownElement.classList.add('nav__links--mobile')
            }
            else if (this.window.innerWidth >=600){
                dropdownElement.classList.remove('nav__links--mobile')
            }
        });
    }
}
const header = new Header()
header.addDropdownEvent()
header.addResizeEvent()