document.addEventListener("DOMContentLoaded", function () {
	console.log("Ready...");

  AOS.init();

	// ----- Scroll ----- //
	// Get all layers
	const layers = document.querySelectorAll("[data-scroll-layer]");
	if (layers) {
		const layerTriggers = document.querySelectorAll("[data-scroll-layer-trigger]");

		// Set up the observer
		const observer = new IntersectionObserver((entries) => {
			// Loop over the entries
			entries.forEach((entry) => {
				// If the element is visible
				if (entry.isIntersecting) {
					// Hide all layers
					layers.forEach((layer) => {
						layer.classList.add("invisible");
					});
					// Show the triggered layer by id
					const layerId = entry.target.attributes["data-scroll-layer-trigger"].value;
					console.log(layerId);
					const layer = document.querySelector(`[data-scroll-layer="${layerId}"]`);
					if (layer) {
						layer.classList.remove("invisible");
					}
				}
			});
		}, {});

		// Loop over the layer triggers
		layerTriggers.forEach((layerTrigger) => {
			// Observe each layer trigger
			observer.observe(layerTrigger);
		});
	}

	// ----- Slideshow ----- //
	const slideshow = document.querySelector("[data-slideshow]");
	if (slideshow) {
		const slides = slideshow.querySelectorAll("[data-slide]");
		const slideNumMarkers = slideshow.querySelectorAll("[data-slide-num]");
		const slideShowNumMarkersActiveClasses = ["bg-gray-150"];
		const slideShowNumMarkersInactiveClasses = ["border", "border-gray-150"];
		const slideShowAutoAdvanceInterval = 10000;

		let slideshowIsPaused = false;
		let currentSlide = 0;

		// if mouse is over slideshow, pause it
		slideshow.addEventListener("mouseover", () => {
			slideshowIsPaused = true;
		});

		// if mouse leaves slideshow, resume it
		slideshow.addEventListener("mouseleave", () => {
			slideshowIsPaused = false;
		});

		// if a slide num marker is clicked, go to that slide
		slideNumMarkers.forEach((marker) => {
			marker.addEventListener("click", () => {
				// Hide all slides
				slides.forEach((slide) => {
					slide.classList.add("hidden");
				});

				// Show the clicked slide
				currentSlide = marker.dataset.slideNum;
				slides[currentSlide].classList.remove("hidden");

				updateSlideNumMarkers();
			});
		});

		// Auto advance the slideshow every 2 seconds if not paused
		setInterval(() => {
			if (slideshowIsPaused) {
				return;
			}

			// Hide all slides
			slides.forEach((slide) => {
				slide.classList.add("hidden");
			});

			// Show the next slide
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			slides[currentSlide].classList.remove("hidden");

			updateSlideNumMarkers();
		}, slideShowAutoAdvanceInterval);

		// Update the slide num markers
		updateSlideNumMarkers = () => {
			slideNumMarkers.forEach((marker) => {
				marker.classList.remove(...slideShowNumMarkersActiveClasses);
				marker.classList.add(...slideShowNumMarkersInactiveClasses);
				if (marker.dataset.slideNum == currentSlide) {
					marker.classList.remove(...slideShowNumMarkersInactiveClasses);
					marker.classList.add(...slideShowNumMarkersActiveClasses);
				}
			});
		};
	}
});
