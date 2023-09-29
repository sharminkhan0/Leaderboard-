/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QmA8PefwGdv5BMnpfXEQ/scores/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_URL);

// api.js
/* const API_BASE_URL = 'https://api.leaderboardapi.com/v1/games';
const YOUR_GAME_ID = 'your_game_id_here'; // Replace with your actual game ID

export async function getScores() {
  try {
    const response = await fetch(`${API_BASE_URL}/${YOUR_GAME_ID}/scores`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.scores;
  } catch (error) {
    console.error('Error fetching scores:', error);
    throw error;
  }
}

export async function submitScore(player, score) {
  try {
    const response = await fetch(`${API_BASE_URL}/${YOUR_GAME_ID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player, score }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // You might want to handle the response data accordingly
  } catch (error) {
    console.error('Error submitting score:', error);
    throw error;
  }
} */

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScoreToList: () => (/* binding */ addScoreToList),
/* harmony export */   displayScores: () => (/* binding */ displayScores)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");

const scoreListElement = document.getElementById('scores');
const addScoreToList = async score => {
  await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(score)
  });
};
const displayScores = scores => {
  scoreListElement.innerHTML = '';
  scores.forEach(score => {
    const listItem = `<li class="list">${score.user}: ${score.score}</li>`;
    scoreListElement.insertAdjacentHTML('beforeend', listItem);
  });
};


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (6:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| }*/\n| \n> .header-container {\n|   background-color: #333;\n|   color: #fff;");

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ "./src/api.js");



const formElement = document.getElementById('form');
const nameInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const refreshButton = document.getElementById('refresh-button');
const addScore = async event => {
  event.preventDefault();
  if (!nameInput.value || !scoreInput.value) return;
  await (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.addScoreToList)({
    user: nameInput.value,
    score: scoreInput.value
  });
  nameInput.value = '';
  scoreInput.value = '';
};
const fetchAndDisplayScores = async () => {
  const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const data = await response.json();
  (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.displayScores)(data.result);
};
formElement.addEventListener('submit', addScore);
refreshButton.addEventListener('click', fetchAndDisplayScores);

/* // app.js
import * as leaderboardModule from './leaderboard.js';
import * as domModule from './dom.js';

function init() {
  const leaderboard = leaderboardModule.getLeaderboard();
  domModule.displayLeaderboard(leaderboard);

  domModule.addRefreshButtonListener(() => {
    const refreshedLeaderboard = leaderboardModule.getLeaderboard();
    domModule.displayLeaderboard(refreshedLeaderboard);
  });

  domModule.addSubmitFormListener(event => {
    event.preventDefault();
    const { name, score } = domModule.getFormData();

    if (name && score) {
      leaderboardModule.addToLeaderboard(name, score);
      domModule.clearInputFields();
      const updatedLeaderboard = leaderboardModule.getLeaderboard();
      domModule.displayLeaderboard(updatedLeaderboard);
    }
  });
}

init();

// app.js
import * as leaderboardModule from './leaderboard.js';
import * as domModule from './dom.js';
import * as apiModule from './api.js';

async function init() {
  // Display initial leaderboard
  const leaderboard = await apiModule.getScores();
  domModule.displayLeaderboard(leaderboard);

  // Add event listeners
  domModule.addRefreshButtonListener(async () => {
    const refreshedLeaderboard = await apiModule.getScores();
    domModule.displayLeaderboard(refreshedLeaderboard);
  });

  domModule.addSubmitFormListener(async event => {
    event.preventDefault();
    const { name, score } = domModule.getFormData();

    if (name && score) {
      await apiModule.submitScore(name, score);
      domModule.clearInputFields();
      const updatedLeaderboard = await apiModule.getScores();
      domModule.displayLeaderboard(updatedLeaderboard);
    }
  });
}

init(); */
})();

/******/ })()
;
//# sourceMappingURL=bundle963d233bff62f455b230.js.map