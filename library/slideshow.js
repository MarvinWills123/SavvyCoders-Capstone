
export default () =>{

    const slideshowSlide = document.querySelector(".slideshow-slide");
    const slideshowImages = document.querySelectorAll(".slideshow-slide img");
    
    //Buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    //Counter
    let counter = 1;
    let size = slideshowSlide.clientWidth;
    console.log({slideshowSlide})

    function translateX(counter) {
        return `translateX(${-1 * size * counter}px)`
    }
    
    slideshowSlide.style.transform = translateX(counter);
    
     //Button Listener
    
    nextBtn.addEventListener('click', function(){
        //console.log('event fired for nextBtn')
        console.log({
            counter,
            translateX: translateX(counter),
            cap: slideshowImages.length - 1,
            slideshowSlide,
            size,
        })
        if (counter >= slideshowImages.length - 1) return;
        slideshowSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        slideshowSlide.style.transform = translateX(counter);
        
    });
    
    prevBtn.addEventListener('click', function(){
        //console.log('event fired for prevBtn')
        console.log({ counter })
        if (counter <= 0) return; 
        slideshowSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slideshowSlide.style.transform = translateX(counter)

    });
    
    slideshowSlide.addEventListener('transitionEnd', function (){
        //console.log('event fired for transitionEnd')
        if (slideshowImages[counter].id ==='lastClone'){
            slideshowSlide.style.transition = "none";
            counter = slideshowImages.length - 2;
            slideshowSlide.style.transform = translateX(counter)

        }
        if (slideshowImages[counter].id ==='firstClone'){
            slideshowSlide.style.transition = "none";
            counter = slideshowImages.length - counter;
            slideshowSlide.style.transform = translateX(counter)
    }
    })
    
};