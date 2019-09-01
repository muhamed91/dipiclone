const accordions = document.querySelectorAll('.information-accordion-trigger');
const gmap = document.querySelector('.information-accordion-content');




// accordions.forEach(function(accordion,index) {
//     accordion.addEventListener('click', function() {
//        let content =  this.nextElementSibling;
//        console.log(content);


//        if(content.style.maxHeight) {
//            content.style.maxHeight = null;
//        } else {
//            content.style.maxHeight = content.scrollHeight + 'px';
//        }
    
//     });
// })


for (var i = 0; i < accordions.length; i ++) {
    accordions[i].addEventListener('click', function() {
        let content =  this.nextElementSibling;
        

        

       
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
            this.innerText = 'Mehr';
            this.style.right = '-16px';
            
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            this.innerText = 'Weniger';
            this.style.right = '4px';
        }
     

    });
}