/*
// ПЕРВОЕ ЗАДАНИЕ

console.log(window); // [object Window]
console.log(document); // {"location":{"ancestorOrigins":{"0":"https://coddy.tech"},"href":"about:srcdoc","origin":"null","protocol":"about:","host":"","hostname":"","port":"","pathname":"srcdoc","search":"","hash":""}}
console.log(navigator); // {}
console.log(location.href); // about:srcdoc
alert('Добро пожаловать'); // Всплывающее окно на всей странице с тектом добро пожаловать

let name = prompt('Как тебя зовут?') 
console.log("Привет, " + name); // Привет, (введенное имя в всплывающем окне)
*/

// ТРЕТЬЕ ЗАДАНИЕ

let main_title = document.getElementById('main-title');
let description = document.getElementsByClassName('description');
let container = document.getElementById('container');

console.log(`Заголовок - ${main_title.textContent}, Доп.Информация - ${container.textContent.trim()}`);

for (let p of description) {
    console.log(p.textContent);
}

