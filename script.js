



let numderOFilms = prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count:numderOFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

personalMovieDB.movies.logan = prompt('Один из последних просмотренных фильмов?','8.1');

console.log(personalMovieDB);
