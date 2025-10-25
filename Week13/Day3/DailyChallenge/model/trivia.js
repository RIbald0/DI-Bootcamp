const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = triviaQuestions.length;

const startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
}

const getCurrentQuestion = () => {
    if(currentQuestionIndex === totalQuestions){
        return {
            finished : true,
            score : score
        };
    } else {
        const currentQuestion =  triviaQuestions[currentQuestionIndex];
        return {
            question : currentQuestion.question,
        }
    }
}

const submitAnswer = (answer) => {
    const questionAnswer = triviaQuestions[currentQuestionIndex];
    let isCorrect = false;
    if(questionAnswer.answer.toLowerCase() === answer.toLowerCase()) {
        score++;
        isCorrect = true 
    }
    currentQuestionIndex++;
    return {
        isCorrect : isCorrect,
        score : score
    }
}


module.exports = {
    startGame,
    getCurrentQuestion,
    submitAnswer
}