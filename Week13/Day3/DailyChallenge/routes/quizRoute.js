const { Router } = require('express');
const { startGame, getCurrentQuestion, submitAnswer } = require('../model/trivia');
const router = Router();

router.get('/quiz', (req, res) => {
    startGame();
    const question = getCurrentQuestion();
    res.status(200).json(question);
});

router.post('/quiz', (req, res) => {
    const { answer } = req.body;
    const feedback = submitAnswer(answer);
    const nextState = getCurrentQuestion();
    res.status(200).json({
        ...feedback,
        ...nextState
    })
});

router.get('/quiz/score', (req, res) => {
    const finalState = getCurrentQuestion();
    res.status(200).json(finalState);
});


module.exports = router
