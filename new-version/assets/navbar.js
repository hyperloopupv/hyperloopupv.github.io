document.addEventListener("DOMContentLoaded", function() {
    
    var navbar = document.querySelector(".navbar");
    
    document.getElementsByClassName("brgr")[0].addEventListener("click", function(){
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
        } else {
            navbar.classList.add('open');
        }
    });
    
});