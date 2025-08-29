const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
  const text = input.value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;

    // click = remove task
    li.addEventListener("click", () => {
      li.remove();
    });

    list.appendChild(li);
    input.value = "";
  }
});