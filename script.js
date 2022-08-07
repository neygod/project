'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Эти группы должны быть массивами. Как итог, функция
//  возвращает новый массив с тремя командами и строкой как 4й элемент.

function sortStudentsByGroups(arr) {
    let arrTeam = [];
    let x = [];
    arr.sort();
       for (let i=0; i<Math.floor(arr.length/3);i++) {
        for (let j=0; j<3; j++) {
            x[j] = arr[i*3+j]
        }
        arrTeam[i] = [x[0],x[1],x[2]]
          
    }
    if (arr.length%3 === 0) {
        arrTeam.push('Оставшиеся студенты: -')}
        if (arr.length%3 ===1) {
            arrTeam.push(`Оставшиеся студенты: ${arr[arr.length-1]}`)
        }
        if (arr.length%3 ===2) {
            arrTeam.push(`Оставшиеся студенты: ${arr[arr.length-2]}, ${arr[arr.length-1]}`)   
        }

    return arrTeam;

}
sortStudentsByGroups(students);









// function sortStudentsByGroups(arr) {
//     let arrTeam = [];
//     arr.sort();
//     for (let i=0, j=0; i<Math.floor(arr.length/3);i++) {
//         arrTeam [i] = [arr[i+j], arr[i+1+j], arr[i+2+j]];j=j+3;
//             }
   
    
//     let team = Math.floor( arr.length/3);
//     console.log(arrTeam);
   

// }
// sortStudentsByGroups(students);







































// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
        
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let shopSQs =0;
    
//     data.shops.forEach((i, a) => {
//         let shopSQ=1
//         for ( let key in i) {
//             shopSQ=shopSQ*i[key];

//         };
//         shopSQs=shopSQs+shopSQ;
        
//     })
//     if (data.budget >= data.height*shopSQs*data.moneyPer1m3) {
//          return 'Бюджета достаточно';
//             } else {
//             return 'Бюджета недостаточно';   
//             };
   
   
// }

// isBudgetEnough(shoppingMallData);



























// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//      showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat=false;

//         } else {
//             personalMovieDB.privat=true;

//         }

//     },
//      writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genres =prompt(`Ваш любимый жанры через запятую`).toLocaleLowerCase();
// if (genres ==='' || genres == null) {
//     console.log('Вы ввели некоррктные данные или не ввели их вовсе');
//     i--;
// } else {
//     personalMovieDB.genres = genres.split(',');
//     personalMovieDB.genres.sort();

// }


           
//         }
//         personalMovieDB.genres.forEach(( item, i) => {
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//         });
//     }
// };









