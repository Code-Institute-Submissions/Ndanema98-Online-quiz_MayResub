const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElements = document.getElementById("question-container") 
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-btns")
const instructionContainerElements = document.getElementById("instructions")
const questions = [
    {
        question: "What is the capital of New Zealand?",
        answers: [ 
            {text: "Wellington", correct: true},
            {text: "London", correct: false},
            {text: "Paris", correct:false},
            {text: "Rome", correct:false},
        ]
    }
]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElements.classList.remove("hide")
    instructionContainerElements.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()
}
function nextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){}
