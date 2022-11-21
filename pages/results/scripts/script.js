let lang = sessionStorage.getItem('lang');

const score = sessionStorage.getItem('result');

const congratulations = document.querySelector('.congratulations');
const button = document.querySelector('.button');

const language = document.querySelector('.language');
const main = document.querySelector('.main');
const quiz = document.querySelector('.quiz');
const text = document.querySelector('.text');

const setLanguage = () => {
    if (lang == 'en') {
        document.querySelector('.en').classList.add('active');
        document.querySelector('.ru').classList.remove('active');
        button.innerHTML = "Retry";
        main.innerHTML = '<a class="link" href="../main/index.html">Main</a>';
        quiz.innerHTML = '<a class="link" href="../quiz/index.html">Quiz</a>';
        text.innerHTML = `Your result: <span class="result">${score}</span>/30`;
        congratulations.innerHTML = 'Congratulations!';
    }
    else {
        document.querySelector('.ru').classList.add('active');
        document.querySelector('.en').classList.remove('active');
        button.innerHTML = 'Повторить попытку';
        main.innerHTML = '<a class="link" href="../main/index.html">Главная</a>';
        quiz.innerHTML = '<a class="link" href="../quiz/index.html">Викторина</a>';
        text.innerHTML = `Ваш результат: <span class="result">${score}</span>/30`;
        congratulations.innerHTML = 'Поздравляю!';
    }
}

language.addEventListener('click', (event) => {
    lang = event.target.classList[0];
    sessionStorage.setItem('lang', lang);
    setLanguage();
})

if (score == 30) {   
    congratulations.classList.remove('hidden')
}
else {
    button.classList.remove('hidden')
}

const result = document.querySelector('.result');
result.innerHTML = sessionStorage.getItem('result');

setLanguage();