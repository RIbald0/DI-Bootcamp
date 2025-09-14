const tasks = [];

click_submit = document.getElementById("form1");
click_submit.addEventListener("submit", addTask)


function addTask(e){
    e.preventDefault()
    const first_input = document.getElementById("first_input").value;
    const div_elm = document.getElementsByClassName("listTasks")[0];
    if (first_input === ''){
        alert("Please do not leave the field blank. Try again!")
    } else {
        const taskIndex = tasks.length
        let obj = {task_id : taskIndex, text : first_input , done: false}
        tasks.push(obj)

        const first_input_div = document.createElement("div");
        first_input_div.setAttribute("data-task-id", taskIndex);
        first_input_div.className = "task-item";
        const unique_id = "task-" +taskIndex

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = unique_id
        checkbox.addEventListener('change', doneTask);
        checkbox.setAttribute('data-task-id', taskIndex);

        const x_button = document.createElement("button")
        const font_button = document.createElement("i")
        font_button.className = "fa-solid fa-x"
        x_button.appendChild(font_button)
        x_button.addEventListener('click',deleteTask)

        const label_elm = document.createElement("label")
        label_elm.textContent = first_input
        label_elm.htmlFor = unique_id

        div_elm.appendChild(first_input_div)
        first_input_div.appendChild(x_button)
        first_input_div.appendChild(checkbox)
        first_input_div.appendChild(label_elm)
    }
}


function doneTask(e){
    const change_elm = parseInt(e.target.dataset.taskId)
    tasks[change_elm].done = !tasks[change_elm].done;
    e.target.parentElement.classList.toggle('task-done');
    console.log(tasks)
}


function deleteTask(e){
    const delete_elm = e.target.closest('.task-item');
    const delete_id = parseInt(delete_elm.dataset.taskId)
    tasks.splice(delete_id, 1);
    delete_elm.remove();
}