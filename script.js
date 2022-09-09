'use strict';



const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter((item=> item.rating>=8));
    
}

function showListOfFilms(arr) {
    return arr.map((item => item.name))
    .join(', '); 
    
}

function setFilmsIds(arr) {
    arr.map((item,index) => {
    item.id = index; 
    } );
    return arr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) { 
    return arr.reduce((acc, item) =>
   ( acc && item.hasOwnProperty('id')));
         
   }
   
    
    


setFilmsIds(films);
//console.log (showGoodFilms(films));
//console.log (showListOfFilms(films));
// console.log (tranformedArray);
console.log(checkFilms(tranformedArray));













