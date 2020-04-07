function startButtonHandler() {
    $("#start").on("click", function (event) {
        displayNewQuestion();
    });
}

//displays question number with updated score
function newQuestionAndScore() {
    const html = $(`<ul>
        <li id="js-answered">Question Number: 
        ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: 
        ${STORE.score}/${STORE.questions.length}</li>
        </ul>`);
    $(".question-and-score").html(html);
}

//provides html structure to render new question
function displayNewQuestion() {
    let renderQuestion = STORE.questions[STORE.currentQuestion];
    newQuestionAndScore();
    const questionHtml = $(`
            <form id="questionAndAnswers">
                <img src="Images/${renderQuestion.questionImage}" alt="${renderQuestion.imageAlt}" height="180" width="220"/>
                <legend>${renderQuestion.question}</legend>
                <div id="js-answers">
                </div>
                <button type="submit" id="btn_answer">Submit</button>
            </form>`);
    $("#view_startQuiz").hide();
    $("#view_answer").hide();
    $("#view_question").html(questionHtml);
    showAnswerChoices();
    $("#view_question").show();

    $("#btn_answer").on("click", function (event) {
        showcorrectAnswer();
    });
}



//displaying the choices for each question    
function showAnswerChoices() {
    let item = STORE.questions[STORE.currentQuestion];
    for (let i = 0; i < item.answers.length; i++) {
        $('#js-answers').append(`
        <input type="radio" name="answers" id="answers${i + 1}" value="${item.answers[i]}" tabindex ="${i + 1}" required="required"> 
        <label for="answers${i + 1}"> ${item.answers[i]}</label> <br/>
        <span id="js-r${i + 1}"></span>
    `);
    }
}


//checks to see if answer is correct, reveals correct answer, offers a Next question button.
function showcorrectAnswer() {
    $("#questionAndAnswers").submit(function (event) {
        event.preventDefault();
    });
    let renderAnswer = STORE.questions[STORE.currentQuestion].answerDescription;
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    let clickedAnswer = $("input[type=radio][name=answers]:checked").val();
    let correct = clickedAnswer === correctAnswer;
    if (!clickedAnswer) {
        alert("Please choose an option");
        return;
      } 

    const correctTag = `<div id="correct">CORRECT!</div>`;
    const incorrectTag = `<div id="incorrect">Incorrect</div>`; 
    const answerHtml = `
    <div class="answer">
     ${correct ? correctTag : incorrectTag}
        <legend>${renderAnswer}</legend>
    </div>
    <div class="next-button">
        <button type="submit" id="btn_next-question">Next</button>
    </div>
`;

    if (correct) {
        STORE.score++
    }
    else {
    };

    $("#btn_answer").hide();
    $("#view_answer").html(answerHtml);
    $("#view_answer").show();

    $("#btn_next-question").on("click", function (event) {
        STORE.currentQuestion++;
        if (STORE.questions.length === STORE.currentQuestion) {
            displayFinalScore();
        }
        else {
            displayNewQuestion();
        };
    });
}


function displayFinalScore() {
    let finishedQuiz =
        `<legend>That's all folks! Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
         <button type="submit" id="btn_restart">Restart</button>    
    `;



    $("#view_result").html(finishedQuiz);
    $("#btn_restart").on("click", function (event) {
        $("#view_result").hide();
        $("#view_startQuiz").show();
    });

    $("#view_question").hide();
    $("#view_answer").hide();
    $("#view_result").show();

    STORE.currentQuestion = 0;
    STORE.score = 0;
}

function regesterHandlers() {
    startButtonHandler();
}

$(regesterHandlers);



