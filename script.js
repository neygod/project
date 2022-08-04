// function first() {
   
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
//     function second () {
//         console.log(2);

//     }
    
// }
// first();
// second();


// function LearnJS(lang, callback) {
//   console.log (`я учу: ${lang}`);
//   callback();
//   }
//   function done() {
//     console.log ('я прошел этот урок');
//   }
//   LearnJS('JS', done);


//const obj = new Object();
'use strict'
const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log ('test');
    }
    
};
options.makeTest();
const {border, bg} = options.colors;

console.log(Object.keys(options).length);
// let counter =0;
// for(let key in options) {
//     if (typeof (options[key])==='object') {
//         for (let i in options[key] ) {
//             console.log(`Свойсвто ${i} имееет знание ${options[key][i]}`);
//             counter++;
//     } 
// } else {
    
//     console.log(`Свойсвто ${key} имееет знание ${options[key]}`);
//     counter++;
// }
// }
// console.log(counter)
