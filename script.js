
// function showExperience(plan) {
     
//     for( let key in plan) {
//         if (key==='exp') { 
//              return plan[key];
//         }
//         if (typeof(plan[key])==="object") {
//             for( let i in plan[key]) {
//                 if (i==='exp') { 
//                       return plan[key][i];
//                 }

//         }
//     }
// }
// }

// function showProgrammingLangs(plan) {
//     let langs= '', answer= '';
    
//     for( let key in plan) {
//      if (key==="programmingLangs") {
//           langs = plan[key];
//      }
//      if (typeof(plan[key])==='object')  {
//          for (let key2 in plan[key]) {
//              if (key2==="programmingLangs") {
//                  langs =plan[key][key2];
//              }
//              if (typeof(plan[key][key2])==='object') {
//                  for (let key3 in plan[key][key2]) {
//                      if (key3==="programmingLangs") {
//                          langs =plan[key][key2][key3];
//                      }
//                  }
//              }

//          }
         
 
//  }
 
// }

// for( let key4 in langs) {
//  answer=answer+`Язык ${key4} изучен на ${langs[key4]}`;
//  answer=answer+'\n';
// }
// return answer; 
// }
//  showExperience(personalPlanPeter)
//  showProgrammingLangs(personalPlanPeter);

 'use strict'
 const personalPlanPeter = {
     name: "Peter",
     age: "29",
     skills: {
         languages: ['ru', 'eng'],
         programmingLangs: {
             js: '20%',
             php: '10%'
         },
         exp: '1 month'
     },
     showAgeAndLangs: function (plan) {
        let answer='';
        for( let key in plan) {
            if (key==="age") {
             answer = answer+`Мне ${plan[key]} и я владею языками:`;
                         }
        }
        for( let key1 in plan) {
            if ( typeof(plan[key1])==="object") {
                for( let key2 in plan[key1]) {
                     if (key2==="languages") {
                        for (let key3 in plan[key1][key2]) {
                  answer = answer+`${plan[key1][key2][key3]} `.toUpperCase();
                        }
               
                
                
             
            }
        }
      
        
        
    }
 
 }
 console.log(answer);
}
 }
 personalPlanPeter.showAgeAndLangs(personalPlanPeter);

