const loadAnswer = (lvl, num) => {
    const title = document.querySelector('.title');
    const img = document.querySelector('.img-question');

    title.innerHTML = data[lvl][num-1]['name'];
    img.src = data[lvl][num-1]['image'];
}

const loadQuestion = (lvl, num) => {
    const audio = document.querySelector('.audio-question');

    const button = document.querySelector('.player-button-question');
    const play = document.querySelector('.play-question');
    const pause = document.querySelector('.pause-question');

    const timebar = document.querySelector('.timebar-question');

    const volumeButton = document.querySelector('.volume-button-question');
    const up = document.querySelector('.up-question');
    const off = document.querySelector('.off-question');
    const volume = document.querySelector('.volume-question');

    const song = data[lvl][num-1]['audio'];

    let playBool = false;
    let volumeBool = true;

    pause.classList.add('hidden');
    play.classList.remove('hidden');

    off.classList.add('hidden');
    up.classList.remove('hidden');

    const loadSong = (song) => {
        audio.src = song;
        audio.volume = 1;
    }

    const playSong = () => {
        audio.play();
        play.classList.add('hidden')
        pause.classList.remove('hidden')
    }

    const pauseSong = () => {
        audio.pause();
        pause.classList.add('hidden')
        play.classList.remove('hidden')
    }

    button.addEventListener('click', () => {
        if (playBool) {
            pauseSong();
            playBool = false;
        }
        else {
            playSong();
            playBool = true;
        } 
    })



    const updateProgress = (elem) => {
        const {duration, currentTime} = elem.srcElement;
        let progressPercent = (currentTime / duration) * 1000;
        if (isNaN(progressPercent)) { progressPercent = 0 };
        timebar.value = progressPercent;
    }

    audio.addEventListener('timeupdate', updateProgress);

    const setProgress = () => {
        audio.currentTime = timebar.value / 1000 * audio.duration;
    }

    timebar.addEventListener('input', setProgress);

    audio.addEventListener('ended', () => {
        if (playBool) {
            audio.currentTime = 0;
            playSong();
        }
    });

    const setVolume = () => {
        audio.volume = volume.value / 100;
    }

    volume.addEventListener('input', setVolume);

    const setVolumeButton = () => {
        if (volumeBool) {
            volume.disabled = true;
            volumeBool = false;
            audio.volume = 0;
            up.classList.add('hidden');
            off.classList.remove('hidden');
        }
        else {
            volume.disabled = false;
            volumeBool = true;
            audio.volume = volume.value / 100;
            off.classList.add('hidden');
            up.classList.remove('hidden');
        } 
    }

    volumeButton.addEventListener('click', () => {
        setVolumeButton();
    })

    loadSong(song);
}

const loadInfo = (lvl, num) => {
    const audio = document.querySelector('.audio-answer');

    const infoTop = document.querySelector('.info-top-container-answer');
    infoTop.classList.remove('hidden');
    infoTop.classList.add('info-top');

    const button = document.querySelector('.player-button-answer');
    const play = document.querySelector('.play-answer');
    const pause = document.querySelector('.pause-answer');

    const timebar = document.querySelector('.timebar-answer');

    const volumeButton = document.querySelector('.volume-button-answer');
    const up = document.querySelector('.up-answer');
    const off = document.querySelector('.off-answer');
    const volume = document.querySelector('.volume-answer');

    const infoTitle = document.querySelector('.info-title');
    const infoTitleEn = document.querySelector('.info-title-en');
    const description = document.querySelector('.info-description-text');
    const img = document.querySelector('.img-answer');

    infoTitle.innerHTML = data[lvl][num-1]['name'];
    infoTitleEn.innerHTML = data[lvl][num-1]['species'];
    description.innerHTML = data[lvl][num-1]['description'];
    img.src = data[lvl][num-1]['image'];

    const song = data[lvl][num-1]['audio'];

    let playBool = false;
    let volumeBool = true;

    pause.classList.add('hidden');
    play.classList.remove('hidden');

    off.classList.add('hidden');
    up.classList.remove('hidden');

    const loadSong = (song) => {
        audio.src = song;
        audio.volume = 1;
    }

    const playSong = () => {
        audio.play();
        play.classList.add('hidden')
        pause.classList.remove('hidden')
    }

    const pauseSong = () => {
        audio.pause();
        pause.classList.add('hidden')
        play.classList.remove('hidden')
    }

    button.addEventListener('click', () => {
        if (playBool) {
            pauseSong();
            playBool = false;
        }
        else {
            playSong();
            playBool = true;
        } 
    })



    const updateProgress = (elem) => {
        const {duration, currentTime} = elem.srcElement;
        let progressPercent = (currentTime / duration) * 1000;
        if (isNaN(progressPercent)) { progressPercent = 0 };
        timebar.value = progressPercent;
    }

    audio.addEventListener('timeupdate', updateProgress);

    const setProgress = () => {
        audio.currentTime = timebar.value / 1000 * audio.duration;
    }

    timebar.addEventListener('input', setProgress);

    audio.addEventListener('ended', () => {
        if (playBool) {
            audio.currentTime = 0;
            playSong();
        }
    });

    const setVolume = () => {
        audio.volume = volume.value / 100;
    }

    volume.addEventListener('input', setVolume);

    const setVolumeButton = () => {
        if (volumeBool) {
            volume.disabled = true;
            volumeBool = false;
            audio.volume = 0;
            up.classList.add('hidden');
            off.classList.remove('hidden');
        }
        else {
            volume.disabled = false;
            volumeBool = true;
            audio.volume = volume.value / 100;
            off.classList.add('hidden');
            up.classList.remove('hidden');
        } 
    }

    volumeButton.addEventListener('click', () => {
        setVolumeButton();
    })

    loadSong(song);
}

const loadList = (lvl) => {
    const title = document.querySelector('.title');
    const img = document.querySelector('.img-question');

    title.innerHTML = '----------';
    img.src = '../../assets/images/bird.jpg';

    const infoTop = document.querySelector('.info-top-container-answer');
    infoTop.classList.remove('info-top');
    infoTop.classList.add('hidden');

    const description = document.querySelector('.info-description-text');
    description.innerHTML = descriptionLang;

    const audio = document.querySelector('.audio-answer');
    audio.pause();

    for (let i = 1; i <= data[lvl].length; i++) {
        const item = document.querySelector(`.item-${i}`);
        item.innerHTML = `<span class="marker marker-${i}"></span>${data[lvl][i-1]['name']}`;
    }
}

const levelLoading = (lvl) => {
    const question = Math.floor(Math.random() * 6) + 1;
    let points = 5;

    const true_sound = new Audio('../../assets/audio/true.mp3');
    const false_sound = new Audio('../../assets/audio/false.mp3');

    const answers = document.querySelector('.answers');
    const nav = document.querySelector('.site-navigation');
    
    const navItem = nav.children[lvl];

    const scoreNum = document.querySelector('.score-num');

    navItem.classList.add('current-item');
    if (lvl) {
        const prevItem = nav.children[lvl-1];
        prevItem.classList.remove('current-item');
    }

    loadList(lvl);

    loadQuestion(lvl, question);

    const choiceAnswer = (listNum) => {
        const marker = document.querySelector(`.marker-${listNum}`);
        loadInfo(lvl, listNum);
        if (question == listNum) {
            true_sound.play();
            marker.classList.add('proper');
            loadAnswer(lvl, question);
            loadQuestion(lvl, question);
            answers.removeEventListener('click', clickFunc);
            answers.removeEventListener('click', enterFunc);
            buttonNext.disabled = false;
            score += points;
            scoreNum.innerHTML = score;
        }
        else {
            if (!(marker.classList[marker.classList.length-1] == 'wrong')) {
                false_sound.currentTime = 0;
                false_sound.play();
                points--;
            }
            marker.classList.add('wrong');
        }
    }

    const clickFunc = (event) => {
        if (event.target.classList[0] == 'answers-list') {
            listNum = event.target.classList[1][event.target.classList[1].length-1];
            choiceAnswer(listNum);
        }
    }

    const enterFunc = (event) => {
        if (event.key === "Enter") {
            listNum = event.composedPath()[0].classList[1][event.composedPath()[0].classList[1].length-1];
            choiceAnswer(listNum);
        }
    }

    answers.addEventListener('click', clickFunc);

    answers.addEventListener('keypress', enterFunc);
}

let lvl = 0;
let score = 0;

let data = birdsData;

let lang = sessionStorage.getItem('lang');
if (!lang) {
    lang = 'en';
}

let descriptionLang;
const buttonNext = document.querySelector('.next');
const scoreText = document.querySelector('.score');
const siteNavigation = document.querySelector('.site-navigation');
const navText = {
    'ru': ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
    'en': ['Warm-up', 'Passerines', 'Forest Birds', 'Songbirds', 'Birds of Prey', 'Sea Birds']
}

for (let i = 0; i < 6; i++) {
    siteNavigation.children[i].innerHTML = navText[lang][i];
}

if (lang == 'ru') {
    scoreText.innerHTML = 'Счет: <span class="score-num">0'
    descriptionLang = 'Послушайте плеер.<br>Выберите птицу из списка';
    buttonNext.innerHTML = 'Следующий уровень'
    data = birdsData;
}
else {
    scoreText.innerHTML = 'Score: <span class="score-num">0'
    descriptionLang = 'Listen to the player.<br>Select a bird from the list';
    buttonNext.innerHTML = 'Next level'
    data = birdsDataEn;
}

buttonNext.addEventListener('click', () => {
    if (lvl < 5) {
        lvl++;
        levelLoading(lvl);
        buttonNext.disabled = true;
        if (lvl == 5) {
            lang == 'ru' ? buttonNext.innerHTML = 'Результаты' : buttonNext.innerHTML = 'Results';
        }
    }
    else {
        sessionStorage.setItem('result', score);
        window.location.href = '../results/index.html';
    }
})

levelLoading(lvl);