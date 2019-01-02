function fetchQuestions(subject) {
  if (subject.selectedIndex != 0) {
    let queDiv = document.getElementById("quizBody");
    let imgDiv = document.getElementById("ImgBody");
    imgDiv.style.display = "none";

    for (let i = 0; i < 10; i++) {
      let div = document.createElement("div");
      let qLabel = document.createElement("label");
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.value = "hi";
      qLabel.appendChild(radio);
      qLabel.appendChild(document.createTextNode("hell"));
      div.appendChild(qLabel);
      queDiv.appendChild(div);
      queDiv.appendChild(document.createElement("br"));
      console.log();
    }
    queDiv.style.display = "block";

    // fetch(`/getQuestion?sub=${subject}`)
    //     .then(function (response) {
    //         if (!response.ok) {
    //             throw new Error('HTTP error, status = ' + response.status);
    //         }

    //         let queDiv = document.getElementById('quizBody');
    //         let imgDiv = document.getElementById('ImgBody');
    //         imgDiv.style.display='none';
    //         queDiv.style.display='block';
    //         for (let i = 0; i < 10; i++) {
    //             let div = document.createElement('div');
    //             let qLabel = document.createElement('label');
    //             let radio = document.createElement('input');
    //             radio.type = "radio";
    //             radio.value = "hi";
    //             qLabel.appendChild(radio);
    //             div.appendChild(qLabel);
    //             queDiv.appendChild(div);
    //             queDiv.appendChild(document.createElement('br'));

    //         }
    //     });
  }
}

//Methods to generate HTML from model
// Every method accepts model and generates corresponding HTML representation

/**
 * Generate question page html
 * @param {*} questionList the question list array
 */
function getQuestionPage(questionList) {
  let outerDiv = document.createElement("div");

  questionList.forEach(question => {
    outerDiv.appendChild(getQuestion(question));
  });

  return outerDiv;
}

/**
 * Generate question html
 * @param {*} question the question object
 */
function getQuestion(question) {
  let outerDiv = document.createElement("div");

  let questionStatementHtml = getQuestionStatement(question.statement);
  outerDiv.appendChild(questionStatementHtml);

  let optionsHtml = getQuestionOptions(question.options);
  outerDiv.appendChild(optionsHtml);

  return outerDiv;
}

/**
 * Generate question statement html
 * @param {} questionStatement the question statement in string
 */
function getQuestionStatement(questionStatement) {
  let outerDiv = document.createElement("div");
  let questionStatementHtml = document.createElement("p");
  questionStatementHtml.textContent = questionStatement;
  outerDiv.appendChild(questionStatementHtml);
  return outerDiv;
}

/**
 * Generate question options html
 * @param {*} options the question options array
 */
function getQuestionOptions(options) {
  let outerDiv = document.createElement("div");
  //prepare options and add them up in outerDiv
  options.forEach(option => {
    outerDiv.appendChild(getOption(option));
  });

  return outerDiv;
}

/**
 * Generate an option html
 * @param {*} option an option string
 */
function getOption(option) {
  let optionHtml = document.createElement("input");
  optionHtml.type = "radio";
  optionHtml.value = option;

  return optionHtml;
}
