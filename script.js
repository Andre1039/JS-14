const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board');

let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})


timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up');
        let elAttr = e.target.getAttribute('data-time');
        time = parseInt(elAttr);
        startGame()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    timeEl.innerHTML = `00:${time}`;
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide');
        board.innerHTML = `Ваш счет: ${score}`
    } else {
        let current = --time;

        if (current < 10) {
            current = `0${current}`;
        }

        timeEl.innerHTML = `00:${current}`;
    }
}

function createRandomCircle() {
    const circle = document.createElement('div');

    circle.classList.add('circle');

    circle.style.cssText = `
        width: 20px;
        height: 20px;
    `

    board.appendChild(circle);

    if(score > 0) {
        let num1 = widthHeight(10, 40),
            num2 = widthHeight(50, 450),
            num3 = widthHeight(50, 450);
        circle.style.cssText =  `
        width: ${num1}px;
        height: ${num1}px;
        top: ${num2}px;
        left: ${num3}px;
        `;
    }
}

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')){
        score++;
        e.target.remove();
        createRandomCircle();        
    }
})

function widthHeight(max, min) {
            let num = Math.floor(Math.random() * (max + 1 - min) + min);
            return num;
        }