
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Nicalena Jean A. Fernandez ❤️</title>

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

    <div class="container" id="opening">
        <h1>For  Nicalena Jean A. Fernandez 💗</h1>
        <p>You deserves something special...</p>

        <div class="envelope">💌</div>

        <button onclick="openLetter()">
            Open My Love Letter ❤️
        </button>
    </div>

    <div class="letter-content" id="letter">
        <h1>My Dearest Bby Cale,</h1>

        <p id="message"></p>

        <h2>With all my love ❤️</h2>
        <h3>Yours Forever 💗</h3>

        <button onclick="readAgain()">Read Again 💌</button>
    </div>

    <script src="{{ asset('js/script.js') }}"></script>

<!-- Floating Hearts Container -->
<div id="hearts-container"></div>


<!-- MUSIC PLAYER -->
<div class="music-player">
    <button id="musicBtn" onclick="toggleMusic()">
        🎵 Play Our Song
    </button>
</div>

<audio id="bgMusic" loop preload="auto">
    <source src="{{ asset('music/love-song.mp3.mp3') }}" type="audio/mpeg">
</audio>

<script>
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    music.volume = 0.5;

    function toggleMusic() {
        if (music.paused) {
            music.play()
                .then(() => {
                    musicBtn.innerHTML = "⏸ Pause Our Song";
                })
                .catch(error => {
                    alert("Unable to play music. Please check your MP3 file.");
                    console.error(error);
                });
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Play Our Song";
        }
    }
</script>

</body>
</html>
