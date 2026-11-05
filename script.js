let paragrath = document.querySelector("#paragrath");
let deletebutton = document.querySelector("#deletebutton");

deletebutton.addEventListener("click", function() {
    paragrath.remove();
    deletebutton.textContent = "Успешно удален";
});