// 'use strict';

const numbersOfFilms = +prompt ('Сколько фильмов ты просмотрел?');
console.log(numbersOfFilms);

personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// const a = prompt ('Last film?',''),
//       b = +prompt ('What points?', '');
//       c = prompt ('Last film?',''),
//       d = +prompt ('What points?', '');


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

        // i = 0
        // while(i < 2){
        //     const a = prompt ('Last film?',''),
        //     b = +prompt ('What points?', '');
        //     i++
        //     if(a != null &&  b != null && a != '' &&  b != '' && a.length < 50){
           
        //         personalMovieDB.movies[a] = b;
        //         console.log('done')
        //     }
        //     else {
        //         i--;
        //     }
        // }

//    do {
//     const a = prompt ('Last film?',''),
//     b = +prompt ('What points?', '');
//     i++
//     if(a != null &&  b != null && a != '' &&  b != '' && a.length < 50){
   
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     }
//     else {
//         i--;
//     }
// }
//    while (i < 2);

      

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

// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB)