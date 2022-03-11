const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElements = document.getElementById("question-container") 
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-btns")
const instructionContainerElements = document.getElementById("instructions")
const timerElement = document.getElementById("timer-area")

let shuffledQuestions, currentQuestionIndex
let count = 30;

let questionCount = 0;

var interval = setInterval(function (){
  document.getElementById('count').innerHTML= count;
  count--;
  if (count === -1){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done'; 
    alert("You're out of time!");
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
    questionContainerElements.classList.add("hide")
  }
}, 1000);

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click",() => {
    currentQuestionIndex++
    nextQuestion()
})


function startGame() {
    questionCount = 0;
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElements.classList.remove("hide")
    instructionContainerElements.classList.add("hide")
    timerElement.classList.remove("hide")
    count = 30;
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()
}
function nextQuestion(){
    questionCount++;
    count = 30;

    if (questionCount > 10) {
        alert("10 Questions Reached")
        // YOU NEED A FUNCTION HERE TO END THE GAME
    }

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
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
     const selectedButton = e.target

     const correct = selectedButton.dataset.correct

     if (selectedButton.hasAttribute('data-correct')){
        incrementScore();
     } else {
        incrementWrongAnswer();
     }

     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button => {
         setStatusClass(button, button.dataset.correct)
     })
     if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("correct").innerText)
    newScore = oldScore + 1;
    document.getElementById("correct").innerHTML = newScore;
}
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    newScore = oldScore + 1;
    document.getElementById("incorrect").innerHTML = newScore;
}

const questions = [
    {
        question: "What is the capital of New Zealand?",
        answers: [ 
            {text: "Wellington", correct: true},
            {text: "London", correct: false},
            {text: "Paris", correct:false},
            {text: "Rome", correct:false},
        ]
    },
    {
        question: "What does the Latin Tempus mean in English",
        answers: [ 
            {text: "Temperature", correct: false},
            {text: "Tempest", correct: false},
            {text: "Time", correct: true},
            {text: "Tomorrow", correct: false}, 
        ]
    },
    {
        question: "On average how far away is the moon from the earth in miles?",
        answers: [ 
            {text: "102,500", correct: false},
            {text: "330,090", correct: false},
            {text: "157,000", correct:false},
            {text: "238,000", correct: true}, 
        ]
    },
    {
        question: "How many notes are there in a musical scale?",
        answers: [ 
            {text: "7", correct: true},
            {text: "4", correct: false},
            {text: "8", correct:false},
            {text: "6", correct:false}, 
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [ 
            {text: "Saturn", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Mars", correct:false},
            {text: "Venus", correct:false}, 
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [ 
            {text: "1", correct: false},
            {text: "5", correct: false},
            {text: "3", correct:true},
            {text: "2", correct:false}, 
        ]
    },
    {
        question: "What is Apple's highest selling Iphone model?",
        answers: [ 
            {text: "Iphone X", correct: false},
            {text: "Iphone 13", correct: false},
            {text: "Iphone 7", correct:false},
            {text: "Iphone 6", correct: true}, 
        ]
    },
    {
        question: "Elon Musk is the CEO of which global brand?",
        answers: [ 
            {text: "Microsoft", correct: false},
            {text: "Facebook", correct: false},
            {text: "Apple", correct:false},
            {text: "Tesla", correct: true}, 
        ]
    },
    {
        question: "What is the highest grossing Marvel movie without the word 'Avengers' in the title?",
        answers: [ 
            {text: "Black Panther", correct: true},
            {text: "Iron Man", correct: false},
            {text: "Hulk", correct:false},
            {text: "Captain America", correct:false}, 
        ]
    },
    {
        question: "What is the largest animal on the planet?",
        answers: [ 
            {text: "Elephant", correct: false},
            {text: "T-Rex", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Great White Shark", correct:false}, 
        ]
    },
    {
        question: "How high is Mount Everest in metres?",
        answers: [ 
            {text: "7,565", correct: false},
            {text: "8,848", correct: true},
            {text: "9,256", correct:false},
            {text: "7,896", correct:false}, 
        ]
    },
    {
        question: "How many bones are there in the average adult human body?",
        answers: [ 
            {text: "206", correct: true},
            {text: "185", correct: false},
            {text: "199", correct:false},
            {text: "211", correct:false}, 
        ]
    },
    {
        question: "What year did Britain join the European Union?",
        answers: [ 
            {text: "1985", correct: false},
            {text: "1970", correct: false},
            {text: "1982", correct:false},
            {text: "1973", correct: true}, 
        ]
    },
    {
        question: "In which state was former US President Barack Obama born?",
        answers: [ 
            {text: "New-York", correct: false},
            {text: "Hawaii", correct: true},
            {text: "California", correct:false},
            {text: "Illionis", correct:false}, 
        ]
    },
    {
        question: "Botany is the study of what life form?",
        answers: [ 
            {text: "Animals", correct: false},
            {text: "Plants", correct: true},
            {text: "Humans", correct:false},
            {text: "Insects", correct:false}, 
        ]
    },
    {
        question: "What is the busiest airport in Britain called?",
        answers: [ 
            {text: "Gatwick", correct: false},
            {text: "Stanstead", correct: false},
            {text: "Heathrow", correct: true},
            {text: "Luton", correct:false}, 
        ]
    },
    {
        question: "What is the name of one of the longest rivers in the world?",
        answers: [ 
            {text: "Nile", correct: false},
            {text: "Amazon", correct: true},
            {text: "Thames", correct:false},
            {text: "Mississippi", correct:false}, 
        ]
    },
    {
        question: "What number is a baker's dozen?",
        answers: [ 
            {text: "13", correct: true},
            {text: "12", correct: false},
            {text: "11", correct:false},
            {text: "14", correct:false}, 
        ]
    },
    {
        question: "How many elements are in the periodic table?",
        answers: [ 
            {text: "97", correct: false},
            {text: "109", correct: false},
            {text: "124", correct:false},
            {text: "118", correct: true}, 
        ]
    },
    {
        question: "Where is the smallest bone in the human body located?",
        answers: [ 
            {text: "Finger", correct: false},
            {text: "Ear", correct: true},
            {text: "Toe", correct:false},
            {text: "Nose", correct:false}, 
        ]
    },
]

