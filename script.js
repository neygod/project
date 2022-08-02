
'use strict';

// В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно 
// попробовать свои силы.
// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через 
// программу. Поэтому нужно четко следовать инструкции.
// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать 
// разные уведомления при проверке.
// Задачи:
// 1) Создайте функцию, которая будет вычислять объем и площадь полной
//  поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
//  Эта функция принимает в себя целое число со значением длины ребра куба. 
//  Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно 
// - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает 
// и тесты будут ломаться. Это из-за того, что этот оператор из более нового 
// стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'





// function calculateVolumeAndArea(a) {
//     if (Number.isInteger(a) && typeof(a)==='number' && a > 0) {
// let kubV= Math.pow(a,3);
// let kubP= Math.pow(a,2)*6;
// console.log(`'Объем куба:${kubV}, площадь всей поверхности:${kubP}'`);
// } else {console.log(`'При вычислении произошла ошибка'`)}
// }
// calculateVolumeAndArea(222);

function calculateVolumeAndArea(a) {
    if (Number.isInteger(a) && typeof(a)==='number' && a > 0) {
return String ( `Объем куба:${Math.pow(a,3)}, площадь всей поверхности:${Math.pow(a,2)*6}`);
} else {return String (`При вычислении произошла ошибка`)}
}
calculateVolumeAndArea(5);




// 2) Постепенно переходим к более реалистичным
//  задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному 
// ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное 
// или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:

function getCoupeNumber(a) {
    if (typeof(a) !=='number' || a < 0 ||  !Number.isInteger(a)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (typeof(a) ===0 || a > 36 ) {
        return "Таких мест в вагоне не существует";
    }
       return Math.ceil(a/4);
}

getCoupeNumber(37)
    