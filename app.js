import { busMall } from './api.js';
import { MallArray } from './ItemArray.js';

const inputTags = document.querySelectorAll('input');
const imageTags = document.querySelectorAll('img');

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
        } else if (i === 1) {
            input.value = randomProduct2.id;
        } else if (i === 2) {
            input.value = randomProduct3.id;
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
                    
                    var ctx = document.getElementById('myChart').getContext('2d');
                    const namesData = busMall.map(item => item.name);
                    
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: namesData,
                            datasets: [{
                                label: 'times shown',
                                data: timesShownArr,
                                backgroundColor: 'blue',
                                borderColor: 'red',
                                borderWidth: 1
                            },
                            {
                                label: 'times clicked',
                                data: timesClickedArr,
                                backgroundColor: 'purple',
                                borderColor: 'grey',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                });
            }
            choiceCount++;
            busMall.forEach((item) => {
                if (item.id === input.value) {
                    item.timesClicked++;
                }
            });
        });
    });

};

newProductButton();


