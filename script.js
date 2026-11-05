let heading = document.querySelector("#heading");
let description = document.querySelector('#description');
let change = document.querySelector('#change');

change.addEventListener("click", function() {
    description.style.color = "white";
    heading.style.backgroundColor = "black";
});