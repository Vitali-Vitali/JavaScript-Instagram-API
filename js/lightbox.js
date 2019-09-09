function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//prev, next button indexes
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//showing the index of picture
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //resetting indexes to show the first image
    if (n === slides.length) {
        slideIndex = 0
    }
    if (n < 0){
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //showing current image
    slides[slideIndex].style.display = "block";
}
