'use strict';
function amountOfPages(summary) {
 let summArr = [],
     k = 0;
for (let i = 1; i <= summary; i++) {
    for (let j = 0; j <String(i).length; j++) {
        summArr.push(Number(String(i)[j]));
        k=j+1;
        
    }
    if (summArr.length==summary) {
        break;
    }
  
}

return Number((summArr.slice(summArr.length-k)).join(''));
}
amountOfPages(1095);















// if (String(i).length==1) {
        
// }
// if (String(i).length==2) {
//     summArr.push(Number(String(i)[0]));
//     summArr.push(Number(String(i)[1]));
// }
// if (String(i).length==3) {
//     summArr.push(Number(String(i)[0]));
//     summArr.push(Number(String(i)[1]));
//     summArr.push(Number(String(i)[2]));
// }
// if (String(i).length==4) {
//     summArr.push(Number(String(i)[0]));
//     summArr.push(Number(String(i)[1]));
//     summArr.push(Number(String(i)[2]));
//     summArr.push(Number(String(i)[3]));
// }