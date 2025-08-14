   const input = document.getElementById("task-input");
        const button = document.getElementById("add-task-btn");
        const list = document.getElementById("task-list");

        button.addEventListener("click", function() {
            const text = input.value.trim();
            if (text !== "") {
                const li = document.createElement("li");
                li.textContent = text;
                list.appendChild(li);
                input.value = "";
            }
        });
        