// TV Shows: AirWolf, Knight Rider, A-Team, The Facts of Life, Golden Girls, Matlock, Murder She Wrote
  var Matlock = {

    question: "What is the answer to Matlock?",
    answers: ["wrong1", "wrong2", "wrong3", "placeholder"],
    rightAnswer: "placeholder",

  }

function askQuestion(showObject) {

  var questionDiv = $("#questionDisplay");

  questionDiv.text(showObject.question);
  console.log(questionDiv.text)

  var answersDiv = $("#answersDisplay");

  for (i = 0; i < showObject.answers.length; i++) {

    var answerButton = $("<button class='btn btn-info col-6 p-1 text-center m-2'>");

    answerButton.text(showObject.answers[i]);

    answersDiv.append(answerButton);

    console.log(answerButton);

  }
}

askQuestion(Matlock);

// create function to display values from available show objects
    //display show.question
    //display show.wrongAnswers and show.rightAnswer in a random order
    //display timer for question

// function to check timer value
  // if timer reaches zero, then ++ to wrong answers, ask user to click next or just auto-next question

// click event to determine if rightAnswer was chosen