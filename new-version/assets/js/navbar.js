document.addEventListener("DOMContentLoaded", function() {
    
    var navbar = document.querySelector(".navbar");
    
/*    window.onscroll = function() {
        if (window.innerHeight > 8) {
            navbar.classList.add('move');
        } else if(window.innerHeight < 8) {
            navbar.classList.remove('move');
        }
    };*/
    
    document.getElementsByClassName("menu")[0].addEventListener("click", function(){
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
        } else {
            navbar.classList.add('open');
        }
    });
    
});