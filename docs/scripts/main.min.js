/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready...");
  AOS.init();

  // ----- Scroll ----- //
  // Get all layers
  var layers = document.querySelectorAll("[data-scroll-layer]");
  if (layers) {
    var layerTriggers = document.querySelectorAll("[data-scroll-layer-trigger]");

    // Set up the observer
    var observer = new IntersectionObserver(function (entries) {
      // Loop over the entries
      entries.forEach(function (entry) {
        // If the element is visible
        if (entry.isIntersecting) {
          // Hide all layers
          layers.forEach(function (layer) {
            layer.classList.add("invisible");
          });
          // Show the triggered layer by id
          var layerId = entry.target.attributes["data-scroll-layer-trigger"].value;
          console.log(layerId);
          var layer = document.querySelector("[data-scroll-layer=\"".concat(layerId, "\"]"));
          if (layer) {
            layer.classList.remove("invisible");
          }
        }
      });
    }, {});

    // Loop over the layer triggers
    layerTriggers.forEach(function (layerTrigger) {
      // Observe each layer trigger
      observer.observe(layerTrigger);
    });
  }

  // ----- Slideshow ----- //
  var slideshow = document.querySelector("[data-slideshow]");
  if (slideshow) {
    var slides = slideshow.querySelectorAll("[data-slide]");
    var slideNumMarkers = slideshow.querySelectorAll("[data-slide-num]");
    var slideShowNumMarkersActiveClasses = ["bg-gray-150"];
    var slideShowNumMarkersInactiveClasses = ["border", "border-gray-150"];
    var slideShowAutoAdvanceInterval = 10000;
    var slideshowIsPaused = false;
    var currentSlide = 0;

    // if mouse is over slideshow, pause it
    slideshow.addEventListener("mouseover", function () {
      slideshowIsPaused = true;
    });

    // if mouse leaves slideshow, resume it
    slideshow.addEventListener("mouseleave", function () {
      slideshowIsPaused = false;
    });

    // if a slide num marker is clicked, go to that slide
    slideNumMarkers.forEach(function (marker) {
      marker.addEventListener("click", function () {
        // Hide all slides
        slides.forEach(function (slide) {
          slide.classList.remove("animate-fade-in");
          slide.classList.add("animate-fade-out");
        });

        // Show the clicked slide
        currentSlide = marker.dataset.slideNum;
        slides[currentSlide].classList.remove("animate-fade-out");
        slides[currentSlide].classList.add("animate-fade-in");
        updateSlideNumMarkers();
      });
    });

    // Auto advance the slideshow every 2 seconds if not paused
    setInterval(function () {
      if (slideshowIsPaused) {
        return;
      }

      // Hide all slides
      slides.forEach(function (slide) {
        slide.classList.remove("animate-fade-in");
        slide.classList.add("animate-fade-out");
      });

      // Show the next slide
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      slides[currentSlide].classList.remove("animate-fade-out");
      slides[currentSlide].classList.add("animate-fade-in");
      updateSlideNumMarkers();
    }, slideShowAutoAdvanceInterval);

    // Update the slide num markers
    updateSlideNumMarkers = function updateSlideNumMarkers() {
      slideNumMarkers.forEach(function (marker) {
        var _marker$classList, _marker$classList2;
        (_marker$classList = marker.classList).remove.apply(_marker$classList, slideShowNumMarkersActiveClasses);
        (_marker$classList2 = marker.classList).add.apply(_marker$classList2, slideShowNumMarkersInactiveClasses);
        if (marker.dataset.slideNum == currentSlide) {
          var _marker$classList3, _marker$classList4;
          (_marker$classList3 = marker.classList).remove.apply(_marker$classList3, slideShowNumMarkersInactiveClasses);
          (_marker$classList4 = marker.classList).add.apply(_marker$classList4, slideShowNumMarkersActiveClasses);
        }
      });
    };
  }

  // Formspark form
  // --------------------------------------------------
  var formSparkID = "1WwymTxU";
  var form = document.querySelector("[data-form]");
  form.addEventListener("submit", function (event) {
    // prevent default form submission
    event.preventDefault();

    // get form elements
    var formContainer = form.parentElement;
    var inputEmail = form.querySelector("[data-input-email]");
    var firstName = form.querySelector("[data-input-first-name]");
    var lastName = form.querySelector("[data-input-last-name]");
    var message = form.querySelector("[data-input-message]");
    var buttonSubmit = form.querySelector("[data-button-submit]");

    // prepare success message
    var formSuccess = document.createElement("p");
    formSuccess.classList.add("font-bold", "p-4", "border", "border-green-500", "text-green-500", "rounded-sm");
    formSuccess.innerHTML = "Thank you!";

    // disable submit button
    buttonSubmit.disabled = true;

    // send form data to formspark
    fetch("https://submit-form.com/" + formSparkID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: inputEmail.value,
        message: message.value
      })
    }).then(function (response) {
      // console.log(response);
      if (response.status == 200) {
        // replace form element with p element
        formContainer.replaceChild(formSuccess, form);
      }
    })["catch"](function (error) {
      // console.error(error);
      // enable submit button
      buttonSubmit.disabled = false;
    });
  });
});

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/main": 0,
/******/ 			"styles/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktarango"] = self["webpackChunktarango"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./src/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;