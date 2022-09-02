'use strict';
// const box = document.querySelector('.box'),
// btn = document.querySelector('button');

// const width = box.scrollWidth;
// const height = box.scrollHeight; 
// console.log(width, height);


// btn.addEventListener('click', ()=> {
// // box.style.height = box.scrollHeight  + 'px';
// console.log(box.scrollTop);
// });


// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);

// console.log(document.documentElement.scrollTop)

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//             }
//             calcArea () {
//                 return this.height*this.width;
//             }
// }
// class ColirRactangleWithText extends Rectangle {
//     constructor (height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;

//     }
//     swowMyProps () {
//         console.log(`Текст: ${this.text}, цвует: ${this.bgColor} `)
//     }
// }
// const div = new ColirRactangleWithText (25,10, 'привет мир','красный');
// div.swowMyProps();
// console.log(div.calcArea());



// 'use strict';
 
// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5);

// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);
// console.log(square.calcArea());
// console.log(long.calcArea());

// console.log(square);
// console.log(Rectangle);
const persone = {
    name: 'Alex',
    tel: '+744444444'
};
console.log(JSON.parse(JSON.stringify(persone)));
