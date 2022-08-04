// Задачи:
// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает 
// время в нужном формате строки. (Смотри пример). Обратите внимание на окончание
//  слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента
//   приходит не число, дробное или отрицательное число - функция возвращает 
//   строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так 
// как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
//  Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
//  Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// function getTimeFromMinutes(minGet) {
//     if (typeof(minGet) !=='number' || minGet < 0 ||  !Number.isInteger(minGet)) {
//                 return "Ошибка, проверьте данные";
//     }
//     let hourGet = Math.floor(minGet/60),
//         minutesGet = minGet%60,
//         hourFrom='ов',
//         minutesFrom='';

//     if (hourGet === 1 ) {
//         hourFrom='';
//     }

//     if (hourGet > 1 && hourGet <5) {
//         hourFrom='а';
//     }

//     if (minutesGet === 1 || minutesGet ===11 ||minutesGet ===21 || minutesGet === 31||
//         minutesGet ===41 ||minutesGet ===51) {
//         minutesFrom='а';
//     }

//     if (minutesGet ===2 || minutesGet ===3 ||minutesGet ===4 || minutesGet === 22||minutesGet ===23 || minutesGet ===24 ||
//         minutesGet ===32 || minutesGet ===33 ||minutesGet ===34 || minutesGet === 42||minutesGet ===43 || minutesGet ===44 ||
//         minutesGet ===52 || minutesGet ===53 ||minutesGet ===54) {
//         minutesFrom='ы';
//     }
  
//     return `Это ${hourGet} час${hourFrom} и ${minutesGet} минут${minutesFrom}`
// }
// getTimeFromMinutes(211)




// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее 
// из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
// Дробные числа разрешены.


function findMaxNumber(a,b,c,d) {
    let arr =[a,b,c,d];
    for (let index = 0; index < arr.length; index++) {
        if (typeof(arr[index]) !== "number")  {
            return 0;
        }    
    }
    arr.sort(function(a,b){return a-b});

return arr[3];
}
findMaxNumber(121,2.2,11)

