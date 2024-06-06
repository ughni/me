// menu
const navbarMenu = document.querySelector('.nav-link')

document.querySelector('#menu').onclick = (e) => {
    navbarMenu.classList.toggle('active')
    e.preventDefault();
}