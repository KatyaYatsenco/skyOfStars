import {Entity} from '../entity';
import {mainContent, optionDailyEntity, optionNightlyEntity} from '../script';
// import {Star} from '../entity/star';

export function Cover(width, height, coverName) {
    let self = this;
    this.birds = [];
    this.clouds = [];
    this.stars = [];

    this.timeOfDay = '';

     let container = document.createElement('div');
    this.container = container;

    let addBird,
        addCloud,
        addStar;

    let stopAddBird = function (time) {
        setTimeout(function () {
            clearInterval(addBird);
        }, time);
    };
    let stopAddCloud = function (time) {
        setTimeout(function () {
            clearInterval(addCloud);
        }, time);
    };
    let stopAddStar = function (time) {
        setTimeout(function () {
            clearInterval(addStar);
        }, time);
    };

    container.setAttribute('class', coverName);

    mainContent.appendChild(container); // add element all times on the top of the main content

    this.width = container.style.width = width + 'px';
    this.height = container.style.height = height + 'px';

    this.addEntity = function () {
        if (optionDailyEntity.value === 'bird') {
            addBird = setInterval(function () {
                let bird = new Entity(1, 'bird', container);

                self.birds.push(bird);
            }, 500);
            stopAddBird(10000);

            optionDailyEntity.value = 'Chose entity';
        }
        else if (optionDailyEntity.value === 'cloud') {
            addCloud = setInterval(function () {
                let cloud = new Entity(1, 'cloud', container);
                self.clouds.push(cloud);
            }, 500);
            stopAddCloud(10000);

            optionDailyEntity.value = 'Chose entity';

        }

        if (optionNightlyEntity.value === 'star') {
            addStar = setInterval(function () {
                let star = new Entity(1, 'star', container);
                self.stars.push(star);
            }, 300);
            stopAddStar(10000);
        }
        optionNightlyEntity.value = 'Chose entity';

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
    }
}

// const star = new Star();
