// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// console.log(family.length);
// function showFamily(arr) {
//      let familyText =''; 
//      let familyBul = false;
//     arr.forEach(element => {familyText = familyText+' '+element;
//      familyBul=true;
     
//     });
//     if (familyBul===false) {return'Семья пуста'}
//     else {
//     return 'Семья состоит из:'+familyText;    
//     }
    
// }
// showFamily(family);




const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];


function standardizeStrings(arr) {
    let cityText='';
     arr.forEach(element => {cityText = cityText+element+'\n';
                });
        console.log(cityText=cityText.toLocaleLowerCase(), typeof(cityText));
     
 }

    standardizeStrings(favoriteCities); 
