// const CURRENT_YEAR = 2024;        
// const CORRECT_ANSEWER = 'Ответ правильный'
// const ERROR_ANSEWER = 'Ответ неправильный'

// const inputNode = document.querySelector('.js-input');
// const buttonNode = document.querySelector('.js-button');
// const outputNode = document.querySelector('.js-output');

// buttonNode.addEventListener('click', function(){
//     const inputValue = inputNode.value;

//     if(!inputValue){
//         return;
//     }

//     const answer =Number(inputNode.value);
//     let output = CORRECT_ANSEWER

//     if (answer !== CURRENT_YEAR){
//         output = ERROR_ANSEWER;
//     }

//     outputNode.innerHTML = output;
    
// });

const quizData = [
    {
        question: "Какого цвета небо?",
        options: ["Синее", "Красное", "Зеленое", "Желтое"],
        correctAnswer: "Синее"
    },
    {
        question: "Сколько пальцев на руке?",
        options: ["Четыре", "Пять", "Шесть", "Семь"],
        correctAnswer: "Пять"
    },
    {
        question: "Какого цвета трава?",
        options: ["Синяя", "Красная", "Зеленая", "Желтая"],
        correctAnswer: "Зеленая"
    },
    {
        question: "Какой сейчас год?",
        options: ["1989", "20024", "2023", "2024"],
        correctAnswer: "2024"
    }

    
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
        alert("Правильно!");
    } else {
        alert(`Неправильно. Правильный ответ : ${correctAnswer}`);
    }

    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Вопросы закончились.");
        currentQuestion = 0;
        loadQuestion();
    }
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Вопросы закончились.");
        currentQuestion = 0;
        loadQuestion();
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);

        
