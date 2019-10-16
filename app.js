import { busMall } from './api.js';
import { MallArray } from './ItemArray.js';

const inputTags = document.querySelectorAll('input');
const imageTags = document.querySelectorAll('img');
const itemName = document.getElementsByClassName('name');

let timesShownArr = [];
let timesClickedArr = [];

const item = new MallArray(busMall);

let choiceCount = 0;

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

    const addInputValues = () => inputTags.forEach((input, i) => {
        if (i === 0) {
            input.value = randomProduct.id;
            console.log(input.value);
        } else if (i === 1) {
            input.value = randomProduct2.id;
            console.log(input.value);
        } else if (i === 2) {
            input.value = randomProduct3.id;
            console.log(input.value);
        }
    });

    
    
    randomProductFunction();
    addInputValues();


    const increaseTimesShown = () => {
        randomProduct.timesShown++;
        randomProduct2.timesShown++; 
        randomProduct3.timesShown++;
    };
    
    
    inputTags.forEach((input) => {
        input.addEventListener('click', () => {
            randomProductFunction();
            addInputValues();
            increaseTimesShown();
            if (choiceCount === 25) {
                busMall.forEach((item) => {
                    timesClickedArr.push(item.timesShown);
                    timesShownArr.push(item.timesClicked);
                    console.log('times clicked');
                    console.log('times shown');
                    console.log(timesClickedArr);
                    console.log(timesShownArr);
                });
            }
            choiceCount++;
            console.log(choiceCount);
            busMall.forEach((item) => {
                if (item.id === input.value) {
                    item.timesClicked++;
                }
            });
        });
    });
};

newProductButton();
