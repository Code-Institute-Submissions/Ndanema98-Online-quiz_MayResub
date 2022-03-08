const startButton = document.getElementById("start-btn")
const questionContainerElements = document.getElementById("question-container") 
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-btns")
const instructionContainerElements = document.getElementById("instructions")
const questions = [
    {
        question: "What is the capital of New Zealand?",
        answers: [ 
            {text: "Wellington", correct: true},
            {text: "London", correct: false}
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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
}
function selectAnswer(){}
