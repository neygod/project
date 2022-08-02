
'use strict';


let numderOFilms;
 function start () {

    numderOFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numderOFilms=='' || numderOFilms== null || isNaN(numderOFilms)) {
        numderOFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
 }
}
start();


const personalMovieDB = {
    count:numderOFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function rememderMyFilms () {
    for (let i=0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
              if (a !=null && b !=null && a !='' && b !='' && a.length<50) {
                personalMovieDB.movies[a] = b;
                console.log ('done');
              } else {
                console.log ('error');i--;
              }
    }

}
rememderMyFilms ();



     function detectPersonalLevel () {
        if (personalMovieDB.count < 10 ) {
            console.log ('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log ('Вы классический зритель'); 
             } else if (personalMovieDB.count >= 30) {
                console.log ('Вы киноман'); 
             } else {
                console.log ('Произошла ошибка');
             }

     }
     detectPersonalLevel ()

     function showMyDB () {
if (personalMovieDB.privat===false) {
    console.log(personalMovieDB); 
     }
    }
    showMyDB ();
    function writeYourGenres () {
        for (let i=0; i <= 2; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
                    personalMovieDB.genres[i] = a;
                                     }
        }
        writeYourGenres () ;

    