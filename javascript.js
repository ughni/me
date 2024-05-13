
// saibar start
// toogel class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#humburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault();
}

// klik di luar elemen
const hm = document.querySelector('#humburger-menu');
const sb = document.querySelector('#search-btn')
const sc = document.querySelector('#shopping-cart-button')


document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active')
    }
})
// click di luar sidebar untuk mehilangkan navbar

// saibar end


// search start

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// search end

// tombol shopping

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active')
    e.preventDefault();
}

// tombol shopping end


// modal box

const modalDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        modalDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});



// icons close 
document.querySelector('.modal .close-icons').onclick = () => {
    itemDeteilButton.style.display = 'none'
    e.preventDefault();
}

//di luar modal


window.onclick = (e) => {
    if (e.target === modalDetailModal) {
        modalDetailModal.style.display = 'none';
    }
}





// beda
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelector('.containerww');
    const jumbos = document.querySelector('.jumbo');
    const thumbs = document.querySelectorAll('.thumb');

    containers.addEventListener('click', function (el) {
        if (el.target.classList.contains('thumb')) {
            jumbos.src = el.target.src;
            jumbos.classList.add('fade');

            setTimeout(function () {
                jumbos.classList.remove('fade')
            }, 500);

            thumbs.forEach(function (thumb) {
                if (thumb.classList.contains('active')) {
                    thumb.classList.remove('active')
                }


            });

            el.target.classList.add('active')
        }
    });
});




