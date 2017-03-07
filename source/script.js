'use strict';
import {Cover} from '../source/cover/index';

export let mainContent = document.querySelector('.mainContent');


// buttons
let buttonAddSky = document.getElementById('addSky'),
    buttonAddEntity = document.getElementById('addEntity'),

    // options
    optionDayOrNight = document.getElementById('dayOrNight');

export let optionDailyEntity = document.getElementById('dailyEntity');
export let optionNightlyEntity = document.getElementById('nightlyEntity'),

    wrapForm = document.querySelector('.wrapForm'),

    skies = [],
    currentSky,
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

buttonAddSky.addEventListener('click', function () { //Listen click to button 'add sky'
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

     let sky = new Cover(700, 500, 'sky'); // create sky
    currentSky = sky;

    let index = skies.push(sky);
    let option = document.createElement('option');
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

let choseDayOrNight = function () {
    optionDayOrNight.addEventListener('change', function () {
        let sky = getCurrentSky();

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
            }
            else {
                visibility(optionNightlyEntity, 'visible');
                visibility(optionDailyEntity, 'hide');
            }
        });
    });
};

optionDailyEntity.addEventListener('change', function () {
    let sky = getCurrentSky();
    sky.addEntity();
});

optionNightlyEntity.addEventListener('change', function () {
    let sky = getCurrentSky();
    sky.addEntity();
});

skySelect.addEventListener('change', function () {
    currentSky = skies[skySelect.value - 1];
    optionDayOrNight.value = 'Day or Night';

    optionDayOrNight.value = currentSky.timeOfDay;
    visibility(optionNightlyEntity, 'hide');
    visibility(optionDailyEntity, 'hide');

});


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




