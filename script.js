'use strict';

let numbersOfFilms;
function start(){
    numbersOfFilms = +prompt ('Сколько фильмов ты просмотрел?');

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt ('Сколько фильмов ты просмотрел?');
    }
}
start();

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){         
        const a = prompt ('Last film?',''),
              b = +prompt ('What points?', '');
        if(a != null &&  b != null && a != '' &&  b != '' && a.length < 50){           
            personalMovieDB.movies[a] = b;
            console.log('done')
        }
        else {
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('1');
    }
    else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('2');
    }
    else if (personalMovieDB.count > 30){
        console.log('4');
    } 
    else {
        console.log('fuckup');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB)
    } 
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
          personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    //   console.log(personalMovieDB.genres[i]);
    }   
}
writeYourGenres();



 