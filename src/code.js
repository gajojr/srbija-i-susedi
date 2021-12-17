var zvukTrenutnoPusten = false;

const zemljeInformacije = [{
        lokacijaAudioFajla: './animal_sounds/cow-moo.wav',
        opisZemlje: 'Madjarska, glavni grad: Budimpesta, broj stanovnika: 9,75 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/cat-meow.wav',
        opisZemlje: 'Rumunija, glavni grad: Bukurest, broj stanovnika: 19,3 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/dog-sound.wav',
        opisZemlje: 'Bugarska, glavni grad: Sofija, broj stanovnika: 6,9 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/bear-sound.mp3',
        opisZemlje: 'Hrvatska, glavni grad: Zagreb, broj stanovnika: 4 miliona',
    },
    {
        lokacijaAudioFajla: './animal_sounds/horse-sound.wav',
        opisZemlje: 'Srbija, glavni grad: Beograd, broj stanovnika: 6,9 miliona',
    },
    {
        lokacijaAudioFajla: './animal_sounds/rooster-sound.mp3',
        opisZemlje: 'Bosna, glavni grad: Sarajevo, broj stanovnika: 3,2 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/rooster-sound.mp3',
        opisZemlje: 'Crna Gora, glavni grad: Podgorica, broj stanovnika: 0,62 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/rooster-sound.mp3',
        opisZemlje: 'Albanija, glavni grad: Tirana, broj stanovnika: 2,8 miliona'
    },
    {
        lokacijaAudioFajla: './animal_sounds/rooster-sound.mp3',
        opisZemlje: 'Makedonija, glavni grad: Skoplje, broj stanovnika: 2 miliona'
    }
];

const images = document.querySelectorAll('img');
const descriptions = document.querySelectorAll('article>h1');
images.forEach((image, idx) => {
    // za svaku sliku pusti audio kad se predje misom
    image.addEventListener('mouseover', () => {
        playAudio(zemljeInformacije[idx].lokacijaAudioFajla);
    });

    // za klik izbaci opis
    descriptions[idx].addEventListener('click', () => {
        alert(zemljeInformacije[idx].opisZemlje);
    });
});

function playAudio(audioPath) {
    // proveri da li se trenutno emituje neki zvuk
    if (zvukTrenutnoPusten === false) {
        const audio = new Audio(audioPath);
        audio.play();
        zvukTrenutnoPusten = true;
        audio.onended = () => {
            zvukTrenutnoPusten = false;
        };
    }
}