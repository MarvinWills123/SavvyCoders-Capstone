 //Another Button Listener 
// signInBtn = document.querySelector('#signInBtn');

//for (i = 0; i < signInBtn.length; i += 1){
    //signInBtn[i].addEventListener('click', function(event){
    //event.preventDefault();

//}); 

 //  createAnAccountBtn = document.querySelector('#createAnAccountBtn');
//for (i = 0; i < createAnAccountBtn.length; i += 1){
    //createAnAccountBtn[i].addEventListener('click', function(event){
    //event.preventDefault();
    
//})


const slideshowSlide = document.querySelector(".slideshow-slide");
const slideshowImages = document.querySelectorAll(".slideshow-slide img");

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
let size = slideshowImages[0];

slideshowSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

 //Button Listener

nextBtn.addEventListener('click', function(){
    if (counter >= slideshowImages.length - 1) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', function(){
    if (counter <= 0) return; 
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

slideshowSlide.addEventListener('transitionEnd', function (){
    if (slideshowImages[counter].id ==='lastClone'){
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (slideshowImages[counter].id ==='firstClone'){
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - counter;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});