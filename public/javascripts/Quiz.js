function fetchQuestions(subject) {

    if (subject.selectedIndex != 0) {

        fetch(`/getQuestion?sub=${subject.value}`)
            .then(function (response) {
                response.text().then((text) => {
                    if (!response.ok) {
                        throw new Error('HTTP error, status = ' + response.status);
                    }
                    let result = JSON.parse(text);
                    let queDiv = document.getElementById('quizBody');
                    let imgDiv = document.getElementById('ImgBody');
                    imgDiv.style.display = 'none';
                    queDiv.style.display = 'block';
                    for (let i = 0; i < 3; i++) {
                        let div = document.createElement('div');
                        div.innerText = `${i + 1}) ${result[i].quiz_question}`;

                        let quiz_options = result[i].quiz_options
                        for (let j = 0; j < quiz_options.length; j++) {
                            let qLabel = document.createElement('label');
                            let radio = document.createElement('input');
                            div.appendChild(document.createElement("br"));
                            radio.type = "radio";
                            radio.value = "a" + j;
                            qLabel.appendChild(radio);
                            qLabel.appendChild(document.createTextNode(quiz_options[j]));
                            div.appendChild(qLabel);
                            queDiv.appendChild(div);
                        }
                        div.appendChild(document.createElement('hr'));
                    }
                });
            });
    }
}