class Question {
    constructor(question, answer, fakeAnswer1, fakeAnswer2, fakeAnswer3) {
        this.question = question;
        this.answer = answer;
        this.fakeAnswer1 = fakeAnswer1;
        this.fakeAnswer2 = fakeAnswer2;
        this.fakeAnswer3 = fakeAnswer3;
    }
}

let i = 1;
var questionsArray;

const questionsElem = document.getElementById("questionsDiv");
const buttonAdd = document.getElementById("add");
const buttonClear = document.getElementById("clear");
const buttonStart = document.getElementById("start");

const questionElem = document.getElementById("question");
const answerElem = document.getElementById("answer");
const fakeAnswerElem1 = document.getElementById("answerFake1");
const fakeAnswerElem2 = document.getElementById("answerFake2");
const fakeAnswerElem3 = document.getElementById("answerFake3");

function loadOldQuestions() {
    questionsArray = JSON.parse(localStorage.getItem("questions"));

    if (questionsArray) {
        questionsArray.forEach(currentQuestion => {
            questionsElem.innerHTML += `<fieldset><legend>Question ${i}</legend><span>Question: ${currentQuestion.question}</span><br><span>Answer: ${currentQuestion.answer}</span></fieldset>`
            i++;
        });
    }
}

function addQuestion() {
    if (questionElem.value && answerElem.value && fakeAnswerElem1.value && fakeAnswerElem2.value && fakeAnswerElem3.value) {
        currentQuestion = new Question(questionElem.value, answerElem.value, fakeAnswerElem1.value, fakeAnswerElem2.value, fakeAnswerElem3.value);

        questionsElem.innerHTML += `<fieldset><legend>Question ${i}</legend><span>Question: ${currentQuestion.question}</span><br><span>Answer: ${currentQuestion.answer}</span></fieldset>`

        questionsArray = questionsArray || [];
        questionsArray.push(currentQuestion);

        localStorage.setItem("questions", JSON.stringify(questionsArray));
        
        i++;
    }
}

buttonAdd.addEventListener("click", addQuestion);
buttonClear.addEventListener("click", function(){
    questionsElem.innerHTML = "";
    localStorage.removeItem("questions");
});
buttonStart.addEventListener("click", function(){
    if(localStorage.getItem("questions")) location.href = '../pages/quiz.html';
    else alert("Add some questions first!!!");
});

loadOldQuestions();