import { busMall } from './api.js';
import { MallArray } from './ItemArray.js';

const inputTags = document.querySelectorAll('input');
const imageTags = document.querySelectorAll('img');
const itemName = document.getElementsByClassName('name');
const items = new MallArray(busMall);


const newProductButton = () => {
    const randomImage = items.getRandomItem();
    let randomImage2 = items.getRandomItem();
    let randomImage3 = items.getRandomItem();
    
    while (randomImage.id === randomImage2.id) {
        randomImage2 = items.getRandomItem();
    }
    while (randomImage3.id === randomImage.id || randomImage3.id === randomImage2.id) {
        randomImage3 = items.getRandomItem();
    }

    imageTags.forEach((tag, i) {

    });
    imageTags.src[0] = randomImage.image;
    imageTags.src[1] = randomImage2.image;
    imageTags.src[2] = randomImage3.image;
};

newProductButton();