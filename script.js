
// animation du caroussel Promos-IMG//


const slider= document.querySelector(".slider");
const items=slider.getElementsByTagName("img");
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0 ;

function slideSuivante(){
    items[count].classList.remove('active');
        if(count < nbSlide - 1){
        count++;
    }else{
        count=0;
    }
    items[count].classList.add('active')
      

}
function slidePrecedente(){
    items[count].classList.remove('active');
    if(count>0){
        count--;
    }else{
        count = nbSlide-1;
    }
    items[count].classList.add('active')
}


suivant.addEventListener("click",slideSuivante);
precedent.addEventListener("click",slidePrecedente);


// animation du menu hamburger //
const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");
const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")
    const ariaToggle =hamburgerToggler.getAttribute 
    ("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
    navLinksContainer.classList.toggle("open")
}

// console.log(hamburgerToggler)
hamburgerToggler.addEventListener("click",toggleNav);


new ResizeObserver(entries => {
    // console.log(entries);
    if(entries[0].contentRect.width <=900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)



