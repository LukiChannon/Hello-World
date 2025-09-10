const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

button.addEventListener("click", addTask);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = input.value.trim();
    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        input.value = "";
    }
}