/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

console.log(personalMovieDB);

// ex 3

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}



// ex 1


// for (let i = 0; i < 2; i++) {
//     movie = prompt("Один из последних просмотренных фильмов?");
//     rating = prompt("На сколько оцените его?");
//     personalMovieDB.movies[movie] = rating;
    //
// }

// while (count < 2) {
//     movie = prompt("Один из последних просмотренных фильмов?");
//     rating = prompt("На сколько оцените его?");
//     personalMovieDB.movies[movie] = rating;
//     count++
// }

let movie;
let rating;

// ex 2
let count = 0;

while (count < 2) {
    movie = prompt("Один из последних просмотренных фильмов?");
    rating = prompt("На сколько оцените его?");
    if (movie == null || rating == null || movie.length == 0 || rating.length == 0 || movie.length > 50) {
        alert("Недопустимое значение для movie или rating");
        continue;
    }
    personalMovieDB.movies[movie] = rating;
    count++;

}
console.log(personalMovieDB);
