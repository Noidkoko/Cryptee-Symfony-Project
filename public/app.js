let header = document.querySelector('header')
let burger = document.querySelector('#burger')
let user = document.querySelector('#icon')

let client_buttons = document.querySelector('.account-buttons')
let clientmenu = document.querySelector('.nav-block')

let feature_content = document.querySelector('.nav-ul')
let feature_menu = document.querySelector('.burger-container')



let client_button = document.querySelector('#icon').addEventListener('click', () => {
    client_buttons.classList.toggle('client-menu-active')
    header.classList.toggle('header-active')
    clientmenu.classList.toggle('user-info-active')
    feature_menu.classList.toggle('burger-container-inactive')
    user.classList.toggle('fa-user-active')
})
let menu_button = document.querySelector('#burger').addEventListener('click', () => {
    feature_content.classList.toggle('nav-ul-active')
    header.classList.toggle('header-active')
    clientmenu.classList.toggle('menu-client-inactive')
    feature_menu.classList.toggle('burger-container-active')
    burger.classList.toggle('fa-burger-active')
})

