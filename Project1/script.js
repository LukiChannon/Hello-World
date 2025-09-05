const input = document.getElementById("inputText");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("list");

    button.addEventListener("click", function() {
      const text = input.value.trim();
      if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        input.value = ""; 
        input.focus();    
      }
    });
