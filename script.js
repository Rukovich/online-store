
let burger = document.querySelector('.burger');
let burger_img = document.querySelector('.burger_img');
let burger_close = document.querySelector('.burger_close');

function toggleMenu() {
   burger.classList.toggle('hidden');
}

burger_img.addEventListener('click', toggleMenu);
burger_close.addEventListener('click', toggleMenu);

