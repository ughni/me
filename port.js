// awal yang di jalangkan
// alert('Selamat datang di web portofolio kami');

const navLink = document.querySelector('.nav-link');
const btnMenu = document.querySelector('#tombol_menu')
document.querySelector('#tombol_menu').onclick = (e) => {
  navLink.classList.toggle('active');
  e.preventDefault();
}

document.addEventListener('click', function (e) {
  if (!btnMenu.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove('active')
  }
})

