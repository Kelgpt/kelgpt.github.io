document.addEventListener('DOMContentLoaded', () => {
// Athlete Slider
const athleteLeftArrow = document.querySelector('.athlete-slider-left-arrow');
const athleteRightArrow = document.querySelector('.athlete-slider-right-arrow');
const athleteWrapper = document.querySelector('.athlete-content-wrapper');
const athleteItems = document.querySelectorAll('.brands-athlete-wrapper');
let athleteCurrentIndex = 0;
const itemsToShow = 4;

function updateAthleteSlider() {
    athleteWrapper.innerHTML = '';

    if (athleteItems.length <= itemsToShow) {
        athleteItems.forEach(item => {
            let clonedItem = item.cloneNode(true);
            athleteWrapper.appendChild(clonedItem);
        });
    } else {
        for (let i = 0; i < itemsToShow; i++) {
            let itemIndex = (athleteCurrentIndex + i) % athleteItems.length;
            let clonedItem = athleteItems[itemIndex].cloneNode(true);
            athleteWrapper.appendChild(clonedItem);
        }
    }
}

function checkAthleteArrows() {
    if (athleteItems.length <= itemsToShow) {
        athleteLeftArrow.style.display = 'none';
        athleteRightArrow.style.display = 'none';
    } else {
        athleteLeftArrow.style.display = 'block';
        athleteRightArrow.style.display = 'block';
    }
}

athleteLeftArrow.addEventListener('click', () => {
    athleteCurrentIndex = (athleteCurrentIndex > 0) ? athleteCurrentIndex - 1 : athleteItems.length - 1;
    updateAthleteSlider();
});

athleteRightArrow.addEventListener('click', () => {
    athleteCurrentIndex = (athleteCurrentIndex + 1) % athleteItems.length;
    updateAthleteSlider();
});

updateAthleteSlider(); // Initialize athlete slider
checkAthleteArrows(); // Check and hide athlete arrows if needed

});