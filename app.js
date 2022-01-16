const quizData = [
    {
        question: 'Who is Surajit\'s favourite female singer ?',
        a: 'Ariana Grande',
        b: 'Taylor Swift',
        c: 'Selena Gomez',
        d: 'Dua Lipa',
        correct: 'a'
    }, {
        question: 'What is Surajit\'s bias name in BlackPink ?',
        a: 'Lisa',
        b: 'Jisso',
        c: 'Jennie',
        d: 'Rose',
        correct: 'c'
    } , {
        question: 'What is the name of Surajit favourite Anime ?',
        a: 'Demon Slayer',
        b: 'Attack On Titan',
        c: 'Let Me Eat Your Pancreas',
        d: 'That Time I Got Reincernated As A Slime',
        correct: 'b'
    }, {
        question: 'What is Surajit\'s favourite Programming Language ?',
        a: 'Java',
        b: 'C / C++ / C#',
        c: 'Ruby',
        d: 'JavaSript',
        correct: 'd'
    }, {
        question: 'What kind of Job Surajit want to do after graduation ?',
        a: 'Web Developer',
        b: 'Android Developer',
        c: 'Game Developer',
        d: 'Software Developer',
        correct: 'a'
    }, {
        question: 'Which one of this is Surajit\'s most favourite thing to do ?',
        a: 'Sleeping',
        b: 'Watching Anime',
        c: 'Playing',
        d: 'Reading A Book',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deslectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

function deslectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}


submitBtn.addEventListener('click', () => {
    
    // check to see the answer
    const answer = getSelected();
    
    // if select any option then only want to show the next question
    if (answer) {    

        // if the chosen answer equals to correct answer increase the score
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }    

        currentQuiz++;        

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} question correctly out of ${quizData.length} questions.</h2>
            
            <button onclick=location.reload()>Play Again</button>`
        }
    }

});




















