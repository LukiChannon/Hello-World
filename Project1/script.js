
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('empty-image');

    const toggleEmptyState = () => {
        emptyImage.computedStyleMap.display = taskList.children.length === 0 ? 'block' : 'none';
      }

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.ariaValueMax.trim();
        if(!taskText) {
            return;
        }
        const Li = document.createElement('li');
        Li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') {addTask(e);
    }

    })
    })