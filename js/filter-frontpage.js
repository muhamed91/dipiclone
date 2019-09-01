const jazzBtnF = document.querySelector('.filter__buttons--filter-button-jazz');

jazzBtnF.addEventListener('click', function () {
    localStorage.setItem('color', '#FDD835');
    window.location = 'festivals.html';
    return false;
});