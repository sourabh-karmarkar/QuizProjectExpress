function fetchQuestions(subject) {

    if (subject.selectedIndex != 0) {

        let queDiv = document.getElementById('quizBody');
        let imgDiv = document.getElementById('ImgBody');
        imgDiv.style.display = 'none';

        for (let i = 0; i < 10; i++) {
            let div = document.createElement('div');
            let qLabel = document.createElement('label');
            let radio = document.createElement('input');
            radio.type = "radio";
            radio.value = "hi";
            qLabel.appendChild(radio);
            qLabel.appendChild(document.createTextNode("hell"));
            div.appendChild(qLabel);
            queDiv.appendChild(div);
            queDiv.appendChild(document.createElement('br'));
console.log();

        }
         queDiv.style.display = 'block';


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