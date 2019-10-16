import { busMall } from './api.js';
import { MallArray } from './ItemArray.js';

const inputTags = document.querySelectorAll('input');
const imageTags = document.querySelectorAll('img');
const itemName = document.getElementsByClassName('name');
const item = new MallArray(busMall);

let gamecount = 0;

let randomProduct;
let randomProduct2;
let randomProduct3;

const newProductButton = () => {

    const randomProductFunction = () => {
        randomProduct = item.getRandomItem();
        randomProduct2 = item.getRandomItem();
        randomProduct3 = item.getRandomItem();
    
        while (randomProduct.id === randomProduct2.id) {
            randomProduct2 = item.getRandomItem();
        }  
        while (randomProduct3.id === randomProduct.id || randomProduct3.id === randomProduct2.id) {
            randomProduct3 = item.getRandomItem();
        }
        imageTags.forEach((image, i) => {
            if (i === 0) {
                image.src = randomProduct.image;
            } else if (i === 1) {
                image.src = randomProduct2.image;
            } else if (i === 2) {
                image.src = randomProduct3.image;
            }
        });
    };
    inputTags.forEach((input, i) => {
        if (i === 0) {
            input.value = randomProduct.id;
        } else if (i === 0) {
            input.value = randomProduct.id;
        } else if (i === 0) {
            input.value = randomProduct.id;
        }
    });
    

    randomProductFunction();
    
    inputTags.forEach((input) => {
        input.addEventListener('click', () => {
            console.log('chosen');
            randomProductFunction();
            gamecount++;
            
        });
    });
};
newProductButton();