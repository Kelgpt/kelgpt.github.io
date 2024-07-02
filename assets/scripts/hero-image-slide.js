document.addEventListener('DOMContentLoaded', () => {
    const heroLeftArrow = document.querySelector('.carousel-left-arrow');
    const heroRightArrow = document.querySelector('.carousel-right-arrow');
    const heroSlides = document.querySelectorAll('.hero-image-slide');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    let heroCurrentIndex = 0;
    let isTransitioning = false; // Prevent spammy clicks

    // Create dots
    heroSlides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            if (isTransitioning) return;
            isTransitioning = true;
            heroCurrentIndex = index;
            updateHeroSlides();
            isTransitioning = false;
        });
        carouselDotsContainer.appendChild(dot);
    });
    const carouselDots = document.querySelectorAll('.carousel-dot');

    function updateHeroSlides() {
        heroSlides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'next-in', 'prev-in', 'next-out', 'prev-out');
            if (index === heroCurrentIndex) {
                slide.classList.add('active');
            } else if (index === (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length) {
                slide.classList.add('prev');
            } else if (index === (heroCurrentIndex + 1) % heroSlides.length) {
                slide.classList.add('next');
            }
        });
        updateDots();
    }

    function updateDots() {
        carouselDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === heroCurrentIndex);
        });
    }

    let isHovered = false;

    function addHoverListeners(element) {
        element.addEventListener('mouseover', () => {
            isHovered = true;
            showArrows();
            
        });
        element.addEventListener('mouseout', () => {
            isHovered = false;
            setTimeout(() => {
                if (!isHovered) {
                    hideArrows();
                }
            }, 100);
        });
    }
    if (heroSlides.length <= 1) {
        heroLeftArrow.style.display = "none";
        heroRightArrow.style.display = "none";
        carouselDotsContainer.style.display = "none";
    }   
    function hideArrows() {
        heroLeftArrow.style.opacity = '0';
        heroRightArrow.style.opacity = '0';
    }

    function showArrows() {
        heroLeftArrow.style.opacity = '1';
        heroRightArrow.style.opacity = '1';
        
    } 
   

    heroSlides.forEach(slide => {
        addHoverListeners(slide);
    });
    addHoverListeners(heroLeftArrow);
    addHoverListeners(heroRightArrow);

    function handleLeftArrowClick() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const prevIndex = (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length;
        heroSlides[heroCurrentIndex].classList.add('prev-out');
        heroSlides[prevIndex].classList.add('prev-in');
        setTimeout(() => {
            heroSlides[heroCurrentIndex].classList.remove('active', 'prev-out');
            heroSlides[prevIndex].classList.remove('prev-in');
            heroCurrentIndex = prevIndex;
            updateHeroSlides();
            isTransitioning = false; // Enable clicks after transition
        }, 200); // Delay to match CSS transition
    }

    function handleRightArrowClick() {
        if (isTransitioning) return;
        isTransitioning = true;

        const nextIndex = (heroCurrentIndex + 1) % heroSlides.length;
        heroSlides[heroCurrentIndex].classList.add('next-in');
        heroSlides[nextIndex].classList.add('next');
        setTimeout(() => {
            heroSlides[heroCurrentIndex].classList.remove('active', 'next-in');
            heroSlides[nextIndex].classList.remove('next');
            heroCurrentIndex = nextIndex;
            updateHeroSlides();
            isTransitioning = false; // Enable clicks after transition
        }, 200); // Delay to match CSS transition
    }

    heroLeftArrow.addEventListener('click', handleLeftArrowClick);
    heroRightArrow.addEventListener('click', handleRightArrowClick);

    updateHeroSlides(); // Initialize hero image slider
});
