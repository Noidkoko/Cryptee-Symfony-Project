let header = document.querySelector('header')

let client_buttons = document.querySelector('.account-buttons')
let client_menu = document.querySelector('.menu-client')

let feature_content = document.querySelector('.nav-ul')
let feature_menu = document.querySelector('.burger-container')



let client_button = document.querySelector('#icon').addEventListener('click', () => {
    client_buttons.classList.toggle('client-menu-active')
    header.classList.toggle('header-active')
    client_menu.classList.toggle('menu-client-active')
    feature_menu.classList.toggle('burger-container-inactive')
})
let menu_button = document.querySelector('#burger').addEventListener('click', () => {
    feature_content.classList.toggle('nav-ul-active')
    header.classList.toggle('header-active')
    client_menu.classList.toggle('menu-client-inactive')
    feature_menu.classList.toggle('burger-container-active')
})

