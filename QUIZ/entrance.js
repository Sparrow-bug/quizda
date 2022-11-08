class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

var totalMarks = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        totalMarks += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        totalMarks += quiz3.score;
        showScores();
    }else{
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:30%; height:70%; display:flex; margin-left:auto; margin-right:auto'></img>`;

        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

function QuizNumber(Count){
    let quizNumber = document.getElementById("heading");
    quizNumber.innerHTML = `Round ${Count}`;
}

function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("qnNum");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber}`;
};

function showScores() {
    var passed="Your results ",result="";
    totalMarks = totalMarks/6;
    if(totalMarks > 9.5){
        result="WELCOME TO VIT VELLORE CAMPUS";
    }else if(totalMarks > 7.5){
        result="WELCOME TO VIT CHENNAI CAMPUS";
    }else if(totalMarks > 6.5){
        result="WELCOME TO VIT AMARAVATI CAMPUS";
    }
    else{
        passed="SORRY, TEST NOT CLEARED!";
    }
    let quizEndHTML =
        `
    <h3 class='message'>YOUR SCORE:</h3>
    <h3 class='score'> ${totalMarks}</h3>
    <h3 class='score'> ${passed}</h3>
    <h3 class='score'> ${result}</h3>
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;

    let quizElemnt2 = document.getElementById("quizHeading");
    quizElemnt2.innerHTML = "<br><br><br><br>";
};

let questions1 = [
    new Question(
        "Production of chlorofluorocarbons (CFC) gas which is proposed to be banned in India, is used in which of the following domestic products?", ["Television" ,"Refrigerator", "Tube light", "Cooking gas"], "Refrigerator"
    ),
    new Question(
        "Which of the following does not contain a coinage metal?", ["Silver and Gold","Zinc and Gold","Copper and Silver","Copper and Gold"], "Zinc and Gold"
    ),
    new Question(
        "Water is a good solvent of ionic salts because?", ["it has a high specific heat","it has no colour","it has a high dipole moment","it has a high boiling point"], "it has a high dipole moment"
    ),
    new Question(
        "Which of the following is not an isotope of hydrogen?", ["Tritium","Deuterium","Protium","Yttrium"], "Yttrium"
    ),
    new Question(
        "The main constituents of pearls are?", ["calcium oxide and ammonium chloride","calcium carbonate and magnesium carbonate","aragonite and conchiolin","ammonium sulphate and sodium carbonate"], "calcium carbonate and magnesium carbonate"
    ),
    new Question(
        "Amalgams are", ["highly coloured alloys","alloys which contain mercury as one of the contents","alloys which have great resistance to abrasion alloys","Fluoroantimonic acid"], "Fluoroantimonic acid"
    ),
    new Question(
        "Which of the following is the lightest metal?", ["Mercury","Lithium","Lead","Silver"], "Lithium"
    ),
    new Question(
        "Which metal has the highest tensile strength?", ["Chromium", "Tungsten", "Steel", "Carbon"], "Tungsten"
    ),
    new Question(
        "Which of the following metals remain in liquid for under normal conditions?", ["Radium","Zinc","Uranium","Mercury"], "Mercury"
    ),
    new Question(
        "Which of the following is an element?", ["Ruby","Sapphire","Emerald","Diamond"], "Diamond"
    )
];

let questions2 = [
    new Question(
      "Headquarters of UNO are situated at", ["New York, USA","Hague (Netherlands)","Geneva Paris"], "New York, USA"  
    ),
    new Question(
      "G-15 is an economic grouping of", ["First World Nations","Second World Nations","Third World Nations","Fourth World Nations"], "Third World Nations"  
    ),
    new Question(
      " For galvanizing iron which of the following metals is used?", ["Aluminium","Copper","Lead","Zinc"], "Zinc"  
    ),
    new Question(
      "During the first crusade, crusaders reached Jerusalem and captured it in", ["1000 AD","1099 AD","1200 AD","1515 AD"], "1099 AD"  
    ),
    new Question(
      "East Timor, which became the 191st member of the UN, is in the continent of", ["Asia","Africa", "Europe","South America"], "Asia"  
    )
];

let questions3 = [
    new Question(
        "E:/Desktop/QUIZ/nike.png", ["Nike", "Puma", "Adidas", "Aldo"], "Nike"
    ),
    new Question(
        "E:/Desktop/QUIZ/reebok.png", ["Google", "Facebook", "Reebok", "Glitch"], "Reebok"
    ),
    new Question(
        "E:/Desktop/QUIZ/jordan.png", ["Nike", "Basket", "Gucci", "Jordan"], "Jordan"
    ),
    new Question(
        "E:/Desktop/QUIZ/lv.png", ["Rabbit", "Adidas", "Louis Vuitton", "Balmain"], "Louis Vuitton"
    ),
    new Question(
        "E:/Desktop/QUIZ/adidas.png", ["Adidas", "Nike", "Puma", "Pepsi"], "Adidas"
    )
];

let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

displayQuestion(1, quiz1, true, quiz2);

let counting = document.getElementById("timer");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown3(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
countDown1(15);