// panggil nav bar
const navbarLink = document.querySelector('.nav-link');
const tombolMenu =  document.querySelector('#tombol-menu')
tombolMenu.addEventListener('click', function (e) {
  navbarLink.classList.toggle('active');
  e.preventDefault();
});

// kalo click bukan menu
document.addEventListener('click', function (e) {
  if (!tombolMenu.contains(e.target) && !navbarLink.contains(e.target)) {
      navbarLink.classList.remove('active')
    }
});