import {getRandomInt} from '../script';

export function Entity(opacity, entityName, skyContainer) {
    let self = this;

    let element = document.createElement('div');

    let size = {
        width: getRandomInt(20, 50),
        height: getRandomInt(20, 50)
    };

    // coordinates entity
    let maxTop = skyContainer.offsetHeight - 50;
    let maxLeft = skyContainer.offsetWidth - 50;

    let coordinates = {
        top: getRandomInt(0, maxTop),
        left: getRandomInt(0, maxLeft)
    };

    let parametersToMove = {
        top: getRandomInt(0, maxTop),
        left: getRandomInt(0, maxLeft),
        speed: 3
    };

    skyContainer.appendChild(element);

    this.width = (element.style.width = size.width + 'px');
    this.height = (element.style.height = size.height + 'px');
    this.top = element.style.top = coordinates.top + 'px';
    this.left = element.style.left = coordinates.left + 'px';
    this.opacity = element.style.opacity = 1;


    if (entityName === 'star') {
        element.classList.add('star');
    }
    else if (entityName === 'cloud') {
        element.classList.add('cloud');
        element.style.width = size.width * 1.5 + 'px';
        element.style.height = size.height * 1.5 + 'px';

    }
    else if (entityName === 'bird') {
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
    }
}

export function stopAddEntity(time, addEntity) {
    setTimeout(() => {
        clearInterval(addEntity);
    }, time);
}
