const questions=[
    {
        question:"Which heading tag is used for main heading?",
        answers:[
            {text:"h2",correct:false},
            {text:"h1",correct:true},
            {text:"h3",correct:false},
            {text:"h6",correct:false},
        ]
    },
    {
        question:"Which option belongs to frontent framework?",
        answers:[
            {text:"node js",correct:false},
            {text:"express js",correct:false},
            {text:"mongodb",correct:false},
            {text:"react js",correct:true},
        ]
    },
    {
    question:"a.HTML stands for HyperText Markup Language.b.CSS is used for styling.Check which option is true?",
    answers:[
        {text:"a and b are true",correct:true},
        {text:"a is true, b is false",correct:false},
        {text:"a is false, b is true",correct:false},
        {text:"a and b are false",correct:false},
    ]
    },
    {
        question:"b tag refers to .....?",
        answers:[
            {text:"break",correct:false},
            {text:"bold",correct:true},
            {text:"big",correct:false},
            {text:"none of the above",correct:false},
        ]
    },
    {
        question:"What is the version of HTML?",
        answers:[
            {text:"HTML5",correct:true},
            {text:"HTML4",correct:false},
            {text:"HTML3",correct:false},
            {text:"HTML6",correct:false},
        ]
    }
];


const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionNumber=0;
let score=0;


function startQuiz()
{
    currentQuestionNumber=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionNumber];
    let questionNo=currentQuestionNumber+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
        {
            selectedBtn.classList.add("correct");
            score++;
        }
        else
        {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct==="true")
                {
                    button.classList.add("correct");
                }
                button.disabled=true;
        });
        nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber<questions.length)
        {
            showQuestion();
        }
        else{
            showScore();
        }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionNumber<questions.length){
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});
startQuiz();
