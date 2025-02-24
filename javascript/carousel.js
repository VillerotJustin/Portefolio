
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {

    button.addEventListener("click", (e) => {

        // Determine direction: next or previous
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        // Get the slides container
        const slidesContainer = button.closest("[data-carousel]").querySelector("[data-slides]");

        // Get the current active slide
        const activeSlide = slidesContainer.querySelector("[data-active]");

        // Get the index of the active slide
        const slides = slidesContainer.children;
        let newIndex = [...slides].indexOf(activeSlide) + offset;

        // Loop back to the first/last slide
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        // TODO Change Lang

        // Remove 'data-active' from the current active slide and set it on the new one
        delete activeSlide.dataset.active;  // Remove from the current active slide
        slides[newIndex].dataset.active = true; // Set on the new slide


    })


})

