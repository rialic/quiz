let score;
const quizForm = document.querySelector('.quiz-form');
const userScoreContainer = document.querySelector('#user_score_container');
const userScore = document.querySelector('#user_score');

const quizCorrectResultList = [
    {'inputQuestion1': 'A'},
    {'inputQuestion2': 'B'},
    {'inputQuestion3': 'B'},
    {'inputQuestion4': 'B'},
    {'inputQuestion5': 'C'},
    {'inputQuestion6': 'D'}
]

const quizCountUserScore = (_, index) => {
    const questionRadioList = quizForm[`inputQuestion${index + 1}`];

    const userAnswer = questionRadioList.value;
    const resultVal = quizCorrectResultList[index][`inputQuestion${index + 1}`];

    if(userAnswer === resultVal) {
        score += (100 / quizCorrectResultList.length); 
    }
}

const animateScore = () => {
    let counter = 0;
    
    const isZeroScore = Math.round(score) === 0;

    if (isZeroScore) {
        return userScore.textContent = counter;
    }

    const timer = setInterval(() => {
        if(counter === Math.round(score)){
            return clearInterval(timer);
        }

        userScore.textContent = ++counter;
    }, 10);
}

const caculateScore = () => {
    score = 0;
    quizCorrectResultList.forEach(quizCountUserScore);
}

const showUserScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    
    userScoreContainer.classList.remove('d-none');
}

const quizFormEvent = event => {
    event.preventDefault();

    caculateScore();

    animateScore();

    showUserScore();
};

quizForm.addEventListener('submit', quizFormEvent);
