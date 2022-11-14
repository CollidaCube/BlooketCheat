function isolateFilename(url) {
    let idx = url.lastIndexOf('/');
    return url.substring(idx+1);
}

function getQuestion() {
    let q = document.querySelector('.styles__questionText___2MlSZ-camelCase').children[0].textContent;
    let img = document.querySelector('.styles__image___7idfJ-camelCase');
    if (img) q = q + "|" + isolateFilename(img.src);
    return q;
}

function findAnswer() {
    let q = getQuestion();
    let ans = document.getElementsByClassName('styles__answerText___2eIBw-camelCase');
    for (let x in ans) {
        let ele = ans[x];
        if (ele.children && answers[q].includes(ele.children[0].textContent))
            ele.click();
    }
    document.querySelector('.styles__nextText___2QnHA-camelCase').click();
}

var answers = {};

function requestAnswers() {
    var props = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
    let questions = props.memoizedProps.client.questions;
    
    for (let idx in questions) {
        let q = questions[idx];
        let questionText = q.text;
        if (q.image) questionText = questionText + "|" + isolateFilename(q.image);

        answers[questionText] = q.correctAnswers;
    }
}

requestAnswers();