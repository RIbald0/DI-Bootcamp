export default class Todolist {
    constructor() {
        this.task = [];
    }


addTask(description){
    const newTask = {
         description: description,
         completed: false
        };
    this.task.push(newTask);
}

completeTask(index){
    this.task[index].completed = true;
}

listTask(){
    this.task.forEach(task => {
        let status;
        if (task.completed === true) {
            status = '[X]'
        } else {
            status = '[ ]'
        }
        console.log(`${status} ${ task.description }`)

    })
}

}

