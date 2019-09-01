const tabItems = document.querySelectorAll('.tab-day-name');
const eventContent = document.querySelectorAll('.event-plan');
const arrow = document.querySelectorAll('.triangle');
const btnState = document.querySelectorAll('.day-name');

function selectItem(index) {
    removeBorder();
    removeShow();
    arrow[index].classList.add('show-Triangle');
    btnState[index].classList.add('color-day-btn');
    
}



tabItems.forEach(function(item, index){
    item.addEventListener('click', function(){
        selectItem(index);
        
    });
});


function removeBorder() {
    tabItems.forEach(function(item, index) {
        arrow[index].classList.remove('show-Triangle');
        btnState[index].classList.remove('color-day-btn');
    });
}

function removeShow() {
    eventContent.forEach(function(event, index) {
        event.classList.remove('hide');
        event.classList.add('show-content');
    });
}



