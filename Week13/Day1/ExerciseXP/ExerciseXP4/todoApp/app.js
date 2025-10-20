import TodoList from './todo.js';

const myTodo = new TodoList();

myTodo.addTask('Add Import on top of the file');
myTodo.addTask('Add Export on top of the file');
myTodo.addTask('Set up environment');

myTodo.completeTask(0);
myTodo.completeTask(1);

console.log('Todo List Status');
myTodo.listTask();