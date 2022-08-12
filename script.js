'use strict';



function factorial(x) {
    if(typeof(x)==='number'&& Number.isInteger(x) && x>0) {
        
    let result = 1;
    if (x===1) {
        return result*x;      
    } else {
return x*factorial(x-1);
    }
} else if (x<=0) {
    return 1;
    } else {
        return 'ошибка';
    }

}
factorial(10);





// function pow (x,n) {
//     let result = 1;
//     for (let i=0; i<n; i++) {
//         result*=x;

//     }
//     return result;
// }

// function pow (x,n) {
//     if (n===1) {
//         return x;
//     } else {
//         return x*pow(x, n-1);
//     }
//     }
//     return result;
// }


// function getTotalProgressIteration(data) {
//     let total = 0;
//     let student = 0;
// for (let  course of Object.values) {
//     if (Array.isArray(course)) {
// student += course.length;
// for (i=0;i<course.length; i++) {
//     total=+course[i].progress;
// }
//     } else {
//         for (let subcourse of Object.values(course)) {
//             student += subcourse.length;
//             total=+subcourse[i].progress;
// }
//     }
 
// }
//     return total/student;
// }

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//        let total = 0;

//         for (i=0;i<data.length; i++) {
//             total=+data[i].progress;
//         }
//         return [total, data.length]
//             } else {
// let total = [0, 0];
// for (let subData of Object.values(data)) {
//     const subDataArr = getTotalProgressByRecursion(subData);
//     total[0] +=subDataArr[0];
//     total[1] =+subDataArr[1];
// }
// return total;
//             }


// }
// const result  = getTotalProgressByRecursion(student);
// console.log (result[0]/result[1]);
