const { Router } = require('express');
const router = Router();

const todos = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const { task } = req.body;
    if(!task) {
        res.status(400).json({message: 'Task is required'});
        return;
    } 
    const newTask = { id:nextId , task , complete: false };
    todos.push(newTask);
    nextId++;
    res.status(201).json(newTask)
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { task , complete } = req.body;

    const index = todos.findIndex(item => item.id === id);

    if (index === -1) {
        res.status(404).json({message : 'Task to update not found'});
        return;
    }

    todos[index] = {...todos[index], task, complete};
    res.status(200).json(todos[index])
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(item => item.id === id);

    if (index === -1) {
        res.status(404).json({message : 'Task to delete not found'});
        return;
    }

    todos.splice(index, 1);
    res.status(204).send()
})

module.exports = router
