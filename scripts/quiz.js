class Question {
    constructor(question, answer, fakeAnswer1, fakeAnswer2, fakeAnswer3) {
        this.question = question;
        this.answer = answer;
        this.fakeAnswer1 = fakeAnswer1;
        this.fakeAnswer2 = fakeAnswer2;
        this.fakeAnswer3 = fakeAnswer3;
    }
}

let questions;

let currentQuestion = 0;

let correctAnswers = 0;

const questionObj = document.getElementById("question");
const answerAObj = document.getElementById("a_text");
const answerBObj = document.getElementById("b_text");
const answerCObj = document.getElementById("c_text");
const answerDObj = document.getElementById("d_text");
const submitObj = document.getElementById("submit");

function deselect() {
    document.getElementsByName('answer').forEach(element => {
        element.checked = false;
    });
}

function loadQuestions() {
    questions = JSON.parse(localStorage.getItem("questions"));

    if (!questions) {
        document.getElementById("quiz").innerHTML = `<h2>There is no questions available for a quiz!</h2><button onclick="location.href = '../pages/quiz_customize.html';" id="submit">Add Questions to Quiz</button>`;
    } else loadNextQuestion();
}

function loadNextQuestion() {
    deselect();

    let answers = [questions[currentQuestion].answer, questions[currentQuestion].fakeAnswer1, questions[currentQuestion].fakeAnswer2, questions[currentQuestion].fakeAnswer3]

    if (currentQuestion == questions.length - 1)
        submitObj.innerHTML = "Submit";

    questionObj.innerHTML = questions[currentQuestion].question + "?";

    answerAObj.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    answerBObj.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    answerCObj.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    answerDObj.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);

    currentQuestion++;
}

function getSelected() {
    const answerObjs = document.getElementsByName("answer");

    answerSelected = undefined

    answerObjs.forEach(answer => {
        if (answer.checked) answerSelected = answer.nextSibling.innerHTML;
    });
    return answerSelected;
}

submitObj.addEventListener("click", () => {
    if (currentQuestion < questions.length && getSelected() != undefined) {
        if (getSelected() == questions[currentQuestion - 1].answer)
            correctAnswers++;
        loadNextQuestion();
    }
    else if (getSelected() != undefined) {
        if (getSelected() == questions[currentQuestion - 1].answer)
            correctAnswers++;

        document.getElementById("quiz").innerHTML = `<h2>You answered ${correctAnswers} out of ${questions.length} correctly!</h2><button id="submit" onclick="location.href = '../pages/quiz_customize.html';">Try another Quiz</button>`;
    }
});

loadQuestions();