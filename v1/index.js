/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// ex 1

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

console.log(numberOfFilms);

// ex 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

console.log(personalMovieDB);

// ex 3

let movie = prompt("Один из последних просмотренных фильмов?");
let rating = prompt("На сколько оцените его?");

personalMovieDB.movies[movie] = rating;


movie = prompt("Еще один из последних просмотренных фильмов?");
rating = prompt("На сколько оцените его?");

personalMovieDB.movies[movie] = rating;

console.log(personalMovieDB);
