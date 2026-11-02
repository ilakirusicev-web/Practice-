/*
// ПЕРВОЕ ЗАДАНИЕ - 1 практика

console.log(window); // [object Window]
console.log(document); // {"location":{"ancestorOrigins":{"0":"https://coddy.tech"},"href":"about:srcdoc","origin":"null","protocol":"about:","host":"","hostname":"","port":"","pathname":"srcdoc","search":"","hash":""}}
console.log(navigator); // {}
console.log(location.href); // about:srcdoc
alert('Добро пожаловать'); // Всплывающее окно на всей странице с тектом добро пожаловать

let name = prompt('Как тебя зовут?') 
console.log("Привет, " + name); // Привет, (введенное имя в всплывающем окне)
*/

/*
// ТРЕТЬЕ ЗАДАНИЕ

let main_title = document.getElementById('main-title');
let description = document.getElementsByClassName('description');
let container = document.getElementById('container');

console.log(`Заголовок - ${main_title.textContent}, Доп.Информация - ${container.textContent.trim()}`);

for (let p of description) {
    console.log(p.textContent);
}
*/

/*
// ПЕРВОЕ ЗАДАНИЕ - 2 практика
let first = document.querySelector('#first');
let parent = first.parentElement;

console.log(parent);
console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.nextElementChild);

let third = document.querySelector("#third");
console.log(third.previousElementSibling);

let link = document.querySelector('#link');
link.href = 'https://dzen.ru/?yredirect=true';

link.setAttribute('title', 'Нажми'); // Добавлен атрибут

link.setAttribute('target','_blank');

let currentTarget = link.getAttribute('target'); // Получен атрибут
console.log(currentTarget);

console.log(third.hasAttribute('disabled')); // Проверено наличие / отсутствие атрибута

link.removeAttribute('title'); // Удален атрибут
console.log(link.hasAttribute('title'));
*/

// Третье задание - 2 практика
let username = document.querySelector('#username');
let result = document.querySelector('#result');

username.setAttribute('value', 'Преподователь')
console.log(username.getAttribute('value'));

result.textContent = username.value;