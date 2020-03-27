function startButtonHandler() {
    $("#start").on("click", function (event) {
        displayNewQuestion();
    });
}

//displays new question with updated score
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
            <form>
                <div class="question">
                    <legend> ${renderQuestion.question}</legend>
                </div>
                <div class="question image">
                    <div class="js-questionImage></div>
                <div class="answer options">
                    <div id="js-answers"> </div>
                </div>
                <div class="col-12">
                    <button type = "submit" id="answer" tabindex="5">Submit</button>
                </div>
            </form>`);
    $("#view_startQuiz").hide();
    $("#view_answer").hide();
    $("#view_question").html(questionHtml);
    showAnswerChoices();
    $("#view_question").show();
}



//displaying the choices for each question    
function showAnswerChoices() {
    let item = STORE.questions[STORE.currentQuestion];
    for (let i = 0; i < item.answers.length; i++) {
    $('#js-answers').append(`
        <input type = "radio" name="answers" id="answers${i+1}" value= "${item.answers[i]}" tabindex ="${i+1}"> 
        <label for="answers${i+1}"> ${item.answers[i]}</label> <br/>
        <span id="js-r${i+1}"></span>
    `);
  }
}

function showcorrectAnswer() {
    let renderAnswer = STORE.questions[STORE.currentQuestion];
    for (let i = 0; i < item.answer.length; i++) {
        $('#js-answer').append(`
            <input type = "radio" name="answer" id="answer${i+1}" value= "${item.answer[i]}" tabindex ="${i+1}"> 
            <label for="answer${i+1}"> ${item.answer[i]}</label> <br/>
            <span id="js-r${i+1}"></span>
            `);
  }     
    $("#view_startQuiz").hide();
    $("#view_answer").show();
    $("#view_question").html(questionHtml);
    showAnswerChoices();
    $("#view_question").show();
}


function finishedQuiz() {

}

function regesterHandlers(){
    startButtonHandler();
}

$(regesterHandlers);



