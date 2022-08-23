'use strict';
function isPangram(string) {
let strAlfavit = 'abcdefghijklmnopqrstuvwxyz',
    k=0;
    string = string.split(' ').join('').toLowerCase();
for (const letters of string) {
    for (const letters1 of strAlfavit) {
    if (letters1===letters) {
        k+=1;
        if (k===26) {
            return true;
        }
    }

    }

}
return false;
}





isPangram('The qus over the lazy dog');











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