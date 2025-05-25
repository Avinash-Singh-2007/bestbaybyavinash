/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/style.scss":
/*!***********************************!*\
  !*** ./src/assets/css/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/css/style.scss */ "./src/assets/css/style.scss");




jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-open').on('click', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-dropdown').addClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-close').on('click', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-dropdown').removeClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accordions .accordion .title').on('click', e => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accordion .text').slideUp();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.accordion').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().addClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).siblings('.text').slideDown();
  });

  /* $('.hover-accordions .accordion .title').on('click', (e) => {
    if (window.innerWidth < 980) {
      $('.accordion .text').slideUp();
      $('.accordion').removeClass('open');
      $(e.target).parent().addClass('open');
      $(e.target).siblings('.text').slideDown();
    }
  });
   $('.hover-accordions .accordion .title').on('mouseenter', (e) => {
    if (window.innerWidth >= 980) {
      $('.accordion').removeClass('open');
      $(e.target).parent().addClass('open');
      $('.hover-text').slideUp();
      setTimeout(() => {
        $('.hover-text').text($(e.target).siblings('.text').text());
        $('.hover-text').slideDown();
      }, 450);
    }
  }); */

  let pageNumber = 1;
  function load_posts() {
    pageNumber++;
    const str = `&pageNumber=${pageNumber}&action=more_post_ajax`;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'POST',
      dataType: 'html',
      url: ajax.url,
      data: str,
      success(data) {
        const $data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data);
        if ($data.length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.posts').append($data);
          if ($data.length < 3) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.more-posts').hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.posts').append('<h3 class="col col-md-12">There are no older posts.</h3>');
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.more-posts').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.posts').append('<h3 class="col col-md-12">There are no older posts.</h3>');
        }
      },
      error(jqXHR, textStatus, errorThrown) {
        $loader.html(`${jqXHR} :: ${textStatus} :: ${errorThrown}`);
      }
    });
    return false;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.more-posts').on('click', () => {
    load_posts();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('scroll', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop() > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('scrolled');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('scrolled');
    }
  });
  const menuContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-header-container');
  if (menuContainer.length > 0) {
    const lastListItem = menuContainer.find('ul > li:last-child');
    if (lastListItem.length > 0) {
      const anchorLink = lastListItem.find('a');
      if (anchorLink.length > 0) {
        anchorLink.attr('target', '_blank');
      }
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map