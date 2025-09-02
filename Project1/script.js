let btn = document.getElementById("btn");
let input = document.getElementById("text");
let list = document.getElementById("myList");

btn.addEventListener("click", addToList);

function addToList() {
    let li = document.createElement("li");
    li.textContent = input.value;
    li.innerHTML = txt;
    list.append(li);
    input.value = "";
}