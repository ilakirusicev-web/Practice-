let title = document.querySelector("#title");
let description = document.querySelector('#description');
let change = document.querySelector('#change');

change.addEventListener("click", function() {
    title.textContent = "Добро пожаловать!";
    description.textContent = "Мы изучаем JavaScript и DOM";
});