'use strict';

console.log('Mighty Ducks is up and running');

//first things first, use json, create function to run through each object, populating card with name, image filepath and stats
let userName = document.getElementById('userName');
let userPic = document.getElementById('coder-pic');
let userStats = document.getElementById('stats');
let userDetails = document.getElementById('details');
let userId = document.getElementById('id-number');

let tradingCard = document.getElementById('trading-card');
let formContainer = document.getElementById('form-container');

//buttons/clickables
let forwardButton = document.getElementById('skip-button');
let backwardButton = document.getElementById('back-button');

let downloadButton = document.getElementById('download-button');
let deleteButton = document.getElementById('delete-button');
let addButton = document.getElementById('add-button');

//create array to hold all trading card coder objects
let coderCardsArray = [];

//new Array for newly created objects so i can put them/get them out of local storage easier
let newlyCreatedCoderCardsArray = [];

//instead, use form data that user inputs, pass it into a constructor class and push all newly created class instances into an array
//we can then iterate through that array and populate the cards that way
let getJsonCards = fetch('./cards.json').then((response)=>{
    return response.json();
}).then(data =>{
    //the data is an object called coderCards who's value is an array of 9 items
    data.coderCards.forEach(coder =>{
        coderCardsArray.push(coder);
    });
}).catch((error)=>{
    console.log('You have an error!', error);
});

//function that takes in an array and populates trading card info
let populate = (arr)=>{
    userName.textContent = arr.name;
    userPic.setAttribute('src', `${arr.image}`);
    userStats.textContent = arr.stats;
    userId.textContent = arr.id;
    userDetails.textContent = arr.details;
}

let counter = userId.textContent;
let skipThroughCards = ()=>{
    //populate trading card container
    //set currentCoderCard to the coderCardsArray[with the index value of whatever the index counter is on at the moment]
    let currentCoderCard = coderCardsArray[counter];

    //if the we're at the end of the array, set indexcounter to 0 so we loop through again
    if(counter === coderCardsArray.length){
        counter = 0;
    }
    populate(currentCoderCard);

    //add 1 to the index counter, moving on to the next codercard object in the coderCardsArray
    //this will be done at the end of this function so it populates then adds whenever i call it
    counter++;
    console.log(coderCardsArray);
    console.log(coderCardsArray.length);
}

let rewindThroughCards = ()=>{
    counter--;

    let currentCoderCard = coderCardsArray[counter];

    if(counter === 0){
        counter = coderCardsArray.length;
    }

    populate(currentCoderCard);
    console.log(coderCardsArray);
    console.log(coderCardsArray.length);
}

//we can use the html2canvas method to take a screenshot of a div
let downloadCards = ()=>{
    // Use the html2canvas function to take a screenshot and append it to the output div
    html2canvas(tradingCard).then((canvas)=>{
        document.getElementById('output').appendChild(canvas);
    });
};

//function that takes information from previous function as parameters
//use that information to create new instance of class, then pass it into the coderCardArray
//i want to save all coder cards created with constructor class to local storage


//check if the array is empty, if it is, get array items from local storage, parse them, then push them to array


//class
class coderCards {
    constructor(firstName, lastName, image, level, xp, powers, details){
        this.name = `${firstName} ${lastName}`;
        this.image = image;
        this.stats = [`Level: ${level}, XP: ${xp}, Powers: ${powers}`];
        this.details = details;
        this.id = coderCardsArray.length + 1;
        //i have a set timeout to do all this after 50ms because it takes a sec for fetch to happen and i don't know how to use async await the way i need to
        //NOTE: Come back to this
        setTimeout(()=>{
            coderCardsArray.push(this);
            newlyCreatedCoderCardsArray.push(this);
            console.log(newlyCreatedCoderCardsArray);
            if(!localStorage.key('newCards')){
                localStorage.setItem('newCards', `${JSON.stringify(newlyCreatedCoderCardsArray)}`);
            }
            let storedCards = JSON.parse(localStorage.getItem('newCards'));
            newlyCreatedCoderCardsArray = [];
            storedCards.forEach(obj => {
                newlyCreatedCoderCardsArray.push(obj);
            });
            localStorage.setItem('newCards', `${JSON.stringify(newlyCreatedCoderCardsArray)}`);
            
        }, 50);
    }
}

//create function to get local storage cards
let getCoderCardsFromLocalsStorage = ()=>{
    let localStorageCards = JSON.parse(localStorage.getItem('newCards'));
    localStorageCards.forEach(item =>{
        coderCardsArray.push(item);
    });
}
setTimeout(getCoderCardsFromLocalsStorage, 50);

let newCoderForm = document.getElementById('add-new-coder-form');
//need function that gets information when form is submitted then creates a new instance of coderCards with the data
let createNewCoderCard = ()=>{
    let newCoderCardCounter = 0;
    let fName = document.getElementById('add-fname').value;
    let lName = document.getElementById('add-lname').value;
    let image = document.getElementById('add-image').value;
    let level = document.getElementById('level').value;
    let xp = document.getElementById('add-xp').value;
    let powers = document.getElementById('powers').value;
    let details = document.getElementById('add-details').value;

    new coderCards(fName, lName, image, level, xp, powers, details);
    newCoderCardCounter++;
}

newCoderForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createNewCoderCard();
    newCoderForm.reset();
    formContainer.classList.remove('active');
});

//add event listeners
addButton.addEventListener('click', ()=>{
    formContainer.classList.toggle('active');
});

// window.addEventListener('load', ()=>{
//     getCoderCardsFromLocalsStorage();
//     console.log(newlyCreatedCoderCardsArray);
//     populate(newlyCreatedCoderCardsArray);
// });

forwardButton.addEventListener('click', skipThroughCards);

backwardButton.addEventListener('click', rewindThroughCards);

downloadButton.addEventListener('click', downloadCards);

//add event listener to output container so it gets rid of the screenshot pic on mouseleave event
let printMe = document.getElementById('output');
printMe.addEventListener('mouseleave', ()=>{
    printMe.textContent = '';
});

// deleteButton.addEventListener('click', );