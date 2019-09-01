// Select the DOM Elements
const menuBtnHam = document.querySelector('.navbar__menu--hamburger');
const menuBtnText = document.querySelector('.navbar__menu--pointer');
const menuOverlay = document.querySelector('.overlay');
const menuList = document.querySelector('.navbar__overlay-list-wrapper');
const closeMenuText = document.querySelector('.navbar__menu-dark--pointer-dark');
const closeMenuIcon = document.querySelector('.navbar__menu--close');
const btnMoreGenres = document.querySelector('.filter__buttons--more-genres');
const showMoreGenre = document.querySelector('.filter__results--more-results');
const fixedNavbar = document.querySelector('.navbar__layout');
const resulButton = document.querySelector('.res-btns');
// Click Eventlistener for the DOM Elements
menuBtnHam.addEventListener('click', triggerOverlay);
menuBtnText.addEventListener('click', triggerOverlay);
closeMenuIcon.addEventListener('click', removeOverlay);
closeMenuText.addEventListener('click', removeOverlay);


// Function for Triggering the Overlay
function triggerOverlay(event) {

    menuOverlay.classList.add('show-overlay');
    menuOverlay.classList.add('fadein');


    if (menuOverlay.classList.contains('show-overlay')) {
        menuOverlay.classList.remove('fadeout');
        menuBtnHam.style.display = 'none';
        menuBtnText.style.display = 'none';
        menuList.style.display = 'block';
        fixedNavbar.style.zIndex = '0';
        ;


    }
}

function removeOverlay(evenet) {
    menuOverlay.classList.remove('show-overlay');
    menuOverlay.classList.remove('fadein');
    menuOverlay.classList.add('fadeout');
    menuBtnHam.style.display = 'block';
    menuBtnText.style.display = 'block';
    menuList.style.display = 'none';
    fixedNavbar.style.zIndex = '1';

}


// Toggle More Genres
btnMoreGenres.addEventListener('click', function (e) {
    showMoreGenre.classList.toggle('show-more-tranisition');

    if (showMoreGenre.classList.contains('show-more-tranisition')) {
        btnMoreGenres.textContent = "Zu klappen";
    } else {
        btnMoreGenres.textContent = "Mehr Genres";
    }
});


