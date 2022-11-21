const language = document.querySelector('.language');
const button = document.querySelector('.button');
const main = document.querySelector('.main');
const quiz = document.querySelector('.quiz');

language.addEventListener('click', (event) => {
    const lang = event.target.classList[0];
    sessionStorage.setItem('lang', lang);
    if (lang == 'en') {
        document.querySelector('.en').classList.add('active');
        document.querySelector('.ru').classList.remove('active');
        button.innerHTML = "Let's start";
        main.innerHTML = '<a class="link" href="../main/index.html">Main</a>';
        quiz.innerHTML = '<a class="link" href="../../quiz/index.html">Quiz</a>';
    }
    else {
        document.querySelector('.ru').classList.add('active');
        document.querySelector('.en').classList.remove('active');
        button.innerHTML = "Старт";
        main.innerHTML = '<a class="link" href="../main/index.html">Главная</a>';
        quiz.innerHTML = '<a class="link" href="../../quiz/index.html">Викторина</a>';
    }
})