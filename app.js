'use strict';

console.log('Mighty Ducks is up and running');

//instead, use form data that user inputs, pass it into a constructor class and push all newly created class instances into an array
//we can then iterate through that array and populate the cards that way
let getJsonCards = fetch('./cards.json').then((response)=>{
    return response.json();
}).then(data =>{
    //do something with this json data eventually
}).catch((error)=>{
    console.log()
});