var zvukTrenutnoPusten = false;

const zivotinjeInformacije = [{
        lokacijaAudioFajla: './animal_sounds/cow-moo.wav',
        opisZivotinje: 'Krava je domaca zivotinja braon-bele ili crno-bele boje i daje mleko'
    },
    {
        lokacijaAudioFajla: './animal_sounds/cat-meow.wav',
        opisZivotinje: 'Macka je mala zivotinja, lovi miseve i pije mleko'
    },
    {
        lokacijaAudioFajla: './animal_sounds/dog-sound.wav',
        opisZivotinje: 'Pas laje, voli da se igra, covekov najbolji prijatelj'
    },
    {
        lokacijaAudioFajla: './animal_sounds/bear-sound.mp3',
        opisZivotinje: 'Medved je veliki, jede mnogo, a popularan je ljubimac u Rusiji',
    },
    {
        lokacijaAudioFajla: './animal_sounds/horse-sound.wav',
        opisZivotinje: 'Konj je plemenita zivotinja, jak',
    },
    {
        lokacijaAudioFajla: './animal_sounds/rooster-sound.mp3',
        opisZivotinje: 'Pevac kukurice rano ujutru, voli da zaokupi decu'
    }
];

// const images = document.querySelectorAll('img');
// images.forEach((image, idx) => {
//     // za svaku sliku pusti audio kad se predje misom
//     image.addEventListener('mouseover', () => {
//         playAudio(zivotinjeInformacije[idx].lokacijaAudioFajla);
//     });

//     // za klik izbaci opis
//     image.addEventListener('click', () => {
//         alert(zivotinjeInformacije[idx].opisZivotinje);
//     });
// });

// function playAudio(audioPath) {
//     // proveri da li se trenutno emituje neki zvuk
//     if (zvukTrenutnoPusten === false) {
//         const audio = new Audio(audioPath);
//         audio.play();
//         zvukTrenutnoPusten = true;
//         audio.onended = () => {
//             zvukTrenutnoPusten = false;
//         };
//     }
// }