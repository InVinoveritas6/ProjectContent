/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ex1 = document.querySelectorAll('.promo__adv img'),
    ex2 = document.querySelectorAll('.promo__genre'),
    ex3 = document.querySelectorAll('.promo__bg'),
    ex4 = document.querySelector('.promo__interactive-list');

const comedy = document.createTextNode('ДРАМА');

ex1.forEach(item => {
    item.remove();
});

ex2[0].replaceWith(comedy);

ex3[0].style.cssText = `background: url('../img/bg.jpg')`;

ex4.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    ex4.innerHTML +=
       `<li class = "promo__interactive-item" > 
       ${i+1}
       ${film}
        <div class = "delete"> </div>
        </li>`;
});