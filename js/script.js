// slider functionality for the home page hero section 
const reviewContainer = document.querySelector('.slider-wrapper');
const nxtBtn = document.querySelector('.nxt-btn');
const preBtn = document.querySelector('.prev-btn');

let containerDimensions = reviewContainer.getBoundingClientRect();
let containerWidth = containerDimensions.width;

nxtBtn.addEventListener('click', () => {
    reviewContainer.scrollLeft += containerWidth;
})

preBtn.addEventListener('click', () => {
    reviewContainer.scrollLeft -= containerWidth;
})

// toggle button functionality on tab and mobile view
const mainmenu = document.querySelector('.mainmenu');
const openmenu = document.querySelector('.openmenu');


openmenu.addEventListener('click', ()=> {
    mainmenu.classList.toggle('active')
});

