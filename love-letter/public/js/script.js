
const loveMessage = `Hi bby, indi ko alam kong saan magsisimula kasi naman feelingko indi kailanman magiging sapat ang mga storya para ma express nko, kong gaano ikw kahalaga sa akin bby.

Bby cale, you are someone truly special, imong smile, kaya palipayon bisag ang ordinaryong adlaw lng, og pag nandiyan ka, parang mas nagiging maganda at meaningful ang lahat ba.

kabalo ko diko perfect, og usahay diko kabalo kung unsa ang mga saktong storya nga akong iingon, pero gusto kong malaman mo na genuine og tinood akong feelings para sa imoha bby.

Thank you for being you. Thank you for bringing happiness, warmth, and beautiful memories into my life.

Kong hatagan ko og chance na mamili og taong makauban nko sa tawanan sa mga pangarap, og sa mga unforgettable moments sa akong life, ikw jud akong pilion baniknik mwaa. Always remember na special ka, appreciated ka, og importanti ka sa akin.

Bisag simple letter rani mapalipay tika kasi nman deserve nimo ang tanan kalipay nga akong ginahatag nimo Iloveyouuusoomuchh mwaaa mwaa.
With all my love, Nicalena Jean A. Fernandez❤️`;

let typingTimer;

function openLetter() {
    document.getElementById('opening').style.display = 'none';
    document.getElementById('letter').style.display = 'block';

    typeMessage();
}

function typeMessage() {
    const message = document.getElementById('message');
    message.textContent = '';

    clearInterval(typingTimer);

    let index = 0;

    typingTimer = setInterval(() => {
        message.textContent += loveMessage[index];
        index++;

        if (index >= loveMessage.length) {
            clearInterval(typingTimer);
        }
    }, 35);
}

function readAgain() {
    typeMessage();
}

function createHeart() {
    const heart = document.createElement('div');

    heart.className = 'floating-heart';
    heart.textContent = ['❤️', '💕', '💗', '💖', '🌸'][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (15 + Math.random() * 25) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';

    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 500);


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Update music button
function updateMusicButton() {
    if (music.paused) {
        musicBtn.innerHTML = "🎵 Play Our Song";
    } else {
        musicBtn.innerHTML = "⏸ Pause Our Song";
    }
}

// Play and pause music
function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(updateMusicButton)
            .catch(error => {
                console.log("Music could not play:", error);
            });
    } else {
        music.pause();
        updateMusicButton();
    }
}

// Try automatic background music
window.addEventListener("load", function () {
    music.volume = 0.35;

    music.play()
        .then(updateMusicButton)
        .catch(() => {
            updateMusicButton();
            console.log("Click Play Our Song to start music.");
        });
});

// Floating animated hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts every 500 milliseconds
setInterval(createHeart, 500);
