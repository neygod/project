'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
    .reduce((w,y)=>w+y.amount,0)
    };

const getTotalIncomeAmount = (data) => {
    data.some(item => item.amount<0) ? 
      data.reduce((w,y)=>w+y.amount,0):
      getPositiveIncomeAmount(data);
    };

// console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));


















// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter((item=> item.rating>=8));
    
// }
// showGoodFilms(films);

// function showListOfFilms(arr) {
//     return arr.map((item => item.name))
//     .join(', '); 
    
// }

// function setFilmsIds(arr) {
//     arr.map((item,index) => {
//     item.id = index; 
//     } );
//     return arr;
// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) { 
//     return arr.reduce((acc, item) =>
//    ( acc && item.hasOwnProperty('id')));
         
//    }
   
    
    


// setFilmsIds(films);
// console.log (showGoodFilms(films));
// console.log (showListOfFilms(films));
// // console.log (tranformedArray);
// console.log(checkFilms(tranformedArray));













