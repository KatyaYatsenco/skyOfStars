/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = Cover;


// import {Star} from '../entity/star';

function Cover(width, height, coverName) {
    var self = this;
    this.birds = [];
    this.clouds = [];
    this.stars = [];

    this.timeOfDay = '';

    var container = document.createElement('div');
    this.container = container;

    var addBird = void 0,
        addCloud = void 0,
        addStar = void 0;

    var stopAddBird = function stopAddBird(time) {
        setTimeout(function () {
            clearInterval(addBird);
        }, time);
    };
    var stopAddCloud = function stopAddCloud(time) {
        setTimeout(function () {
            clearInterval(addCloud);
        }, time);
    };
    var stopAddStar = function stopAddStar(time) {
        setTimeout(function () {
            clearInterval(addStar);
        }, time);
    };

    container.setAttribute('class', coverName);

    __WEBPACK_IMPORTED_MODULE_1__script__["mainContent"].appendChild(container); // add element all times on the top of the main content

    this.width = container.style.width = width + 'px';
    this.height = container.style.height = height + 'px';

    this.addEntity = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__script__["optionDailyEntity"].value === 'bird') {
            addBird = setInterval(function () {
                var bird = new __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */](1, 'bird', container);

                self.birds.push(bird);
            }, 500);
            stopAddBird(10000);

            __WEBPACK_IMPORTED_MODULE_1__script__["optionDailyEntity"].value = 'Chose entity';
        } else if (__WEBPACK_IMPORTED_MODULE_1__script__["optionDailyEntity"].value === 'cloud') {
            addCloud = setInterval(function () {
                var cloud = new __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */](1, 'cloud', container);
                self.clouds.push(cloud);
            }, 500);
            stopAddCloud(10000);

            __WEBPACK_IMPORTED_MODULE_1__script__["optionDailyEntity"].value = 'Chose entity';
        }

        if (__WEBPACK_IMPORTED_MODULE_1__script__["optionNightlyEntity"].value === 'star') {
            addStar = setInterval(function () {
                var star = new __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */](1, 'star', container);
                self.stars.push(star);
            }, 300);
            stopAddStar(10000);
        }
        __WEBPACK_IMPORTED_MODULE_1__script__["optionNightlyEntity"].value = 'Chose entity';
    };

    this.removeBirds = function () {
        stopAddBird(10);
        self.birds.forEach(function (elem) {
            elem.remove();
        });
        self.birds = [];
    };
    this.removeClouds = function () {
        stopAddCloud(10);
        self.clouds.forEach(function (elem) {
            elem.remove();
        });
        self.clouds = [];
    };

    this.removeStars = function () {
        stopAddStar(10);
        self.stars.forEach(function (elem) {
            elem.remove();
        });
        self.stars = [];
    };

    this.removeEntities = function () {
        self.removeBirds();
        self.removeClouds();
        self.removeStars();
    };
}

// const star = new Star();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_cover_index__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContent", function() { return mainContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionDailyEntity", function() { return optionDailyEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skySelect", function() { return skySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSky", function() { return currentSky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skies", function() { return skies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapForm", function() { return wrapForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionNightlyEntity", function() { return optionNightlyEntity; });
/* harmony export (immutable) */ __webpack_exports__["getRandomInt"] = getRandomInt;




var mainContent = document.querySelector('.mainContent');

// buttons
var buttonAddSky = document.getElementById('addSky'),
    buttonAddEntity = document.getElementById('addEntity'),


// options
optionDayOrNight = document.getElementById('dayOrNight');

var optionDailyEntity = document.getElementById('dailyEntity');
var optionNightlyEntity = document.getElementById('nightlyEntity'),
    wrapForm = document.querySelector('.wrapForm'),
    skies = [],
    currentSky = void 0,
    skySelect = document.getElementById('skies');

function visibility(element, value) {
    if (value === 'visible') {
        element.classList.remove('hide');
        element.classList.add('visible');
    }
    if (value === 'hide') {
        element.classList.remove('visible');
        element.classList.add('hide');
    }
}

buttonAddSky.addEventListener('click', function () {
    //Listen click to button 'add sky'
    visibility(wrapForm, 'hide');
    visibility(optionDayOrNight, 'hide');
    visibility(optionNightlyEntity, 'hide');
    visibility(optionDailyEntity, 'hide');
    optionDayOrNight.value = 'Day or Night';

    visibility(wrapForm, 'visible');
    visibility(optionDayOrNight, 'visible');
    if (optionDayOrNight.value !== '') {
        buttonAddEntity.classList.add('visible');
    }

    var sky = new __WEBPACK_IMPORTED_MODULE_0__source_cover_index__["a" /* Cover */](700, 500, 'sky'); // create sky
    currentSky = sky;

    var index = skies.push(sky);
    var option = document.createElement('option');
    option.value = index;
    option.textContent = index;
    skySelect.appendChild(option);
    skySelect.value = index;
    optionDayOrNight.value = 'Day or Night';
    choseDayOrNight();
});

function getCurrentSky() {
    visibility(optionDailyEntity, 'hide');
    visibility(optionNightlyEntity, 'hide');

    return currentSky;
}

var choseDayOrNight = function choseDayOrNight() {
    optionDayOrNight.addEventListener('change', function () {
        var sky = getCurrentSky();

        sky.removeEntities();

        sky.timeOfDay = optionDayOrNight.value;
        switch (optionDayOrNight.value) {
            case 'day':
                sky.container.style.backgroundColor = '#00BFFF';
                visibility(optionNightlyEntity, 'hide');
                visibility(optionDailyEntity, 'hide');
                break;
            case 'night':
                sky.container.style.backgroundColor = '#191970';
                visibility(optionNightlyEntity, 'hide');
                visibility(optionDailyEntity, 'hide');
                break;
            default:
                optionDayOrNight.value = 'Day or Night';
                break;
        }

        buttonAddEntity.addEventListener('click', function () {
            if (optionDayOrNight.value === 'day') {
                visibility(optionDailyEntity, 'visible');
                visibility(optionNightlyEntity, 'hide');
            } else {
                visibility(optionNightlyEntity, 'visible');
                visibility(optionDailyEntity, 'hide');
            }
        });
    });
};

optionDailyEntity.addEventListener('change', function () {
    var sky = getCurrentSky();
    sky.addEntity();
});

optionNightlyEntity.addEventListener('change', function () {
    var sky = getCurrentSky();
    sky.addEntity();
});

skySelect.addEventListener('change', function () {
    currentSky = skies[skySelect.value - 1];
    optionDayOrNight.value = 'Day or Night';

    optionDayOrNight.value = currentSky.timeOfDay;
    visibility(optionNightlyEntity, 'hide');
    visibility(optionDailyEntity, 'hide');
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;
/* unused harmony export stopAddEntity */


function Entity(opacity, entityName, skyContainer) {
    var self = this;

    var element = document.createElement('div');

    var size = {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(20, 50),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(20, 50)
    };

    // coordinates entity
    var maxTop = skyContainer.offsetHeight - 50;
    var maxLeft = skyContainer.offsetWidth - 50;

    var coordinates = {
        top: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(0, maxTop),
        left: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(0, maxLeft)
    };

    var parametersToMove = {
        top: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(0, maxTop),
        left: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__script__["getRandomInt"])(0, maxLeft),
        speed: 3
    };

    skyContainer.appendChild(element);

    this.width = element.style.width = size.width + 'px';
    this.height = element.style.height = size.height + 'px';
    this.top = element.style.top = coordinates.top + 'px';
    this.left = element.style.left = coordinates.left + 'px';
    this.opacity = element.style.opacity = 1;

    if (entityName === 'star') {
        element.classList.add('star');
    } else if (entityName === 'cloud') {
        element.classList.add('cloud');
        element.style.width = size.width * 1.5 + 'px';
        element.style.height = size.height * 1.5 + 'px';
    } else if (entityName === 'bird') {
        element.classList.add('bird');
    }

    this.move = setTimeout(function () {
        element.style.transition = "all 5s";
        element.style.top = parametersToMove.top + 'px';
        element.style.left = parametersToMove.left + 'px';
        element.style.opacity = 0;
    }, 1000);

    this.remove = function () {
        element.remove();
    };
}

function stopAddEntity(time, addEntity) {
    setTimeout(function () {
        clearInterval(addEntity);
    }, time);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map