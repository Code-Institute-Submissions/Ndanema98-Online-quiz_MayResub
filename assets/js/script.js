const startButton = document.getElementById("start-btn")
const questionContainerElements = document.getElementById("question-container") 
const instructionContainerElements = document.getElementById("instructions")

startButton.addEventListener("click", startGame)
function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElements.classList.remove("hide")
    instructionContainerElements.classList.add("hide")

}
function nextQuestion() {

}
function selectAnswer(){

}
