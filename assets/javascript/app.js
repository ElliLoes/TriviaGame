
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var doneButton = document.getElementById("done");
var startButton = document.getElementById("start");
var d = 60;
var intervalID;

var questions = [
    {
        question: "'They got married early, never had no money' is the first line of which classic Australian song?",
        answers: {
            a: "'To Her Door' by Paul Kelly and the Coloured Girls",
            b: "'Beds are Burning' by Midnight Oil",
            c: "'Listen Like Thieves’ by INXS",
            d: "'Khe Sanh' by Cold Chisel",
        },
        correctAnswer: "a",
    },
    {
        question: "Complete this lyric from the song by The Animals. 'There is a house in New Orleans, they call the….'",
        answers: {
            a: "Red house",
            b: "Rising sun",
            c: "House on the moon",
            d: "Cool house",
        },
        correctAnswer: "b",
    },
    {
        question: "Aretha Franklin’s 1967 hit song ‘Respect’ was written, and originally performed, by..",
        answers: {
            a: "Simon and Garfunkel",
            b: "Diana Ross",
            c: "Marvin Gaye",
            d: "Otis Redding",
        },
        correctAnswer: "c",
    },
    {
        question: "The 2010 album by Scottish band Belle and Sebastian is called",
        answers: {
            a: "Tigermilk",
            b: "Dear Catastrophe Waitress",
            c: "Write About Love",
            d: "If Your're Feeling Sinister",
        },
        correctAnswer: "c",
    },
    {
        question: "Complete this lyric from Michael Jackson’s ‘Thriller’. 'It’s close to midnight, and something evil’s lurking in the….'",
        answers: {
            a: "Wind",
            b: "Air",
            c: "Dark",
            d: "Trees",
        },
        correctAnswer: "c",
    },
    {
        question: "In the Flaming Lips song 'She don't use jelly', what does the girl use to make her hair 'real orange'?",
        answers: {
            a: "Tangerines",
            b: "Saffron",
            c: "Something you buy at the store",
            d: "Food colouring",
        },
        correctAnswer: "a",
    },
    {
        question: "From which You am I song is the following line? 'I’m like a waterlogged ball, that no one wants to kick around anymore'.",
        answers: {
            a: "Purple Sneakers",
            b: "Berlin Chair",
            c: "Heavy Heart",
            d: "Mr Milk",
        },
        correctAnswer: "c",
    },
];

function startGame() {
    document.getElementById("timesUp").style.cssText = "display: none";
    document.getElementById("remainingTime").innerHTML = d;
    buildQuiz ();
    intervalID = setInterval(timer, 1000);
    startButton.style.cssText = "display: none";
    document.getElementById("controls").style.cssText = "display: block";
}

function timer() {
    d--;
    document.getElementById("timesUp").style.cssText = "display: none";
    document.getElementById("remainingTime").innerHTML = d;
    if (d == 0) {
        document.getElementById("timesUp").style.cssText = "display: block";
        hasFinished = true;
        clearInterval(intervalID);
        showResults ();
    }
}

function buildQuiz() {
    var output = [];
    questions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question}</div>
             <div class="answers"> ${answers.join('')} </div>`
            );
        }
    )
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    let triviaCorrect = 0;
    let triviaIncorrect = 0;
    let triviaUnanswered = 0;

    questions.forEach(function (currentQuestion, questionNumber){
        var answerContainer = answerContainers[questionNumber];
        var selector = "input[name=question" + questionNumber + "]:checked";
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer == currentQuestion.correctAnswer) {
            triviaCorrect++;
        } else if (userAnswer === undefined) {
            triviaUnanswered++;
        } else {
            triviaIncorrect++;
        }
    });

    quizContainer.style.cssText = "display: none";
    document.getElementById("controls").style.cssText = "display: none";
    $('#results').html(
        '<h3>Thank you for playing!</h3>' +
        '<p>Correct: ' + triviaCorrect + '</p>' +
        '<p>Incorrect: ' + triviaIncorrect + '</p>' +
        '<p>Unanswered: ' + triviaUnanswered + '</p>'
    )
}

function main() {
    document.getElementById("controls").style.cssText = "display: none";
    startButton.addEventListener("click", startGame);
    doneButton.addEventListener("click", showResults);
}

main();



