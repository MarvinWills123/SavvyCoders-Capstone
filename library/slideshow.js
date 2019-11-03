
export default () =>{

    const slideshowSlide = document.querySelector(".slideshow-slide");
    const slideshowImages = document.querySelectorAll(".slideshow-slide img");
    
    //Buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    //Counter
    let counter = 1;
    let size = slideshowSlide.clientWidth;


    function translateX(counter) {
        return `translateX(${-1 * size * counter}px)`
    }
    
    slideshowSlide.style.transform = translateX(counter);
    
     //Button Listener
    nextBtn.addEventListener('click', function(){
       
        if (counter >= slideshowImages.length - 1) return;
        slideshowSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        slideshowSlide.style.transform = translateX(counter);
        
    });
    
    prevBtn.addEventListener('click', function(){
        
        if (counter <= 0) return; 
        slideshowSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slideshowSlide.style.transform = translateX(counter)

    });
    
    slideshowSlide.addEventListener('transitionEnd', function (){
        if (slideshowImages[counter].id ==='lastClone'){
            slideshowSlide.style.transition = "none";
            counter = slideshowImages.length - 1;
            slideshowSlide.style.transform = translateX(counter)

        }
        if (slideshowImages[counter].id ==='firstClone'){
            slideshowSlide.style.transition = "none";
            counter = slideshowImages.length - counter;
            slideshowSlide.style.transform = translateX(counter)
    }
    })
    
};