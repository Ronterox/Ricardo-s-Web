class Question {
    constructor(question, answerA, answerB, answerC, answerD, correctAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
    }
}
const questions = [
    new Question("Who are you?", "Ricardo", "El RICKOW", "RICKYTON", 'Rock lee 2', 'a'), new Question("Who am I?", "Carlos", "Miquel", "Puri", 'PUPU', 'c'), new Question("Why are we still here?", "Everyday I can feel my leg", "My arm", "Even my fingers", 'Just to suffer', 'd')];

let currentQuestion = 0;

let correctAnswers = 0;

const questionObj = document.getElementById("question");
const answerAObj = document.getElementById("a_text");
const answerBObj = document.getElementById("b_text");
const answerCObj = document.getElementById("c_text");
const answerDObj = document.getElementById("d_text");
const submitObj = document.getElementById("submit");

function deselect()
{
    document.getElementsByName('answer').forEach(element => {
        element.checked = false;
    });
}

function loadQuestion() 
{
    deselect();

    if (currentQuestion == questions.length - 1)
        submitObj.innerHTML = "Submit";

    questionObj.innerHTML = questions[currentQuestion].question;
    answerAObj.innerHTML = questions[currentQuestion].answerA;
    answerBObj.innerHTML = questions[currentQuestion].answerB;
    answerCObj.innerHTML = questions[currentQuestion].answerC;
    answerDObj.innerHTML = questions[currentQuestion].answerD;

    currentQuestion++;
}

function getSelected() 
{
    const answerObjs = document.getElementsByName("answer");

    answerSelected = undefined

    answerObjs.forEach(answer => {
        if(answer.checked)
            answerSelected = answer.id;
    });
    return answerSelected;
}

submitObj.addEventListener("click", () => {
    if (currentQuestion < questions.length && getSelected() != undefined)
    {
        if(getSelected() == questions[currentQuestion - 1].correctAnswer)
            correctAnswers++;
        loadQuestion();
    }
    else {
        //TODO: Show results
        console.log('You have '+ correctAnswers + ' correct answers!');
    }
});
loadQuestion();