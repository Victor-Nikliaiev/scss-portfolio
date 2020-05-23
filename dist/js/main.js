const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item') 
const btns = document.querySelectorAll('.projects__btn')


btns.forEach(btn => btn.addEventListener('mouseover',  () => {
    btn.classList.add('animate__animated');
    btn.classList.add('animate__faster');
    btn.classList.add('animate__flash'); 
    btn.classList.add('animate__infinite'); 
}))

btns.forEach(btn => btn.addEventListener('mouseout', () => {
    btn.classList.remove('animate__animated');
    btn.classList.remove('animate__faster');
    btn.classList.remove('animate__flash'); 
    btn.classList.remove('animate__infinite'); 
    
}))

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'))

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'))
        showMenu = false;
    }
}