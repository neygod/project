
'use strict';
// const usdCur = 285;
// const discoount = 0.9;

// function convert (amount,curr) {
//     return curr*amount;


   
// }
// function promotion (resukl) {
//     console.log(resukl*discoount)
// }
// promotion(convert(500,usdCur))
// console.log(convert(500,usdCur))


// function test (){
//     for (let i=1; i<100; i++){
//         console.log (i);
//         if (i === 3) return
//     }
//     console.log('djoe')
// }
// test ()

// function doNothing (){};
// console.log(doNothing ()===undefined)

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.


// Место для первой задачи
function sayHello(a) {
    return '"Привет, '+ a + '!"';

}
console.log(sayHello('Антон'));


// Место для второй задачи
function returnNeighboringNumbers(a) {
    return [a-1,a,a+1];
    
}
console.log(returnNeighboringNumbers(6))


// Место для третьей задачи
function getMathResult(a,b) {
    let result=a; if (typeof(b)==='number'
 && b>0) {
    for (let i = 2; i <= b; i++) {
        result=result+'---'+a*i;
            }
} else { return a;

}
  

    return result;

}
console.log(getMathResult(y,4));