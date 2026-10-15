

const homeScreen = document.getElementById("homeScreen");

const explanationScreen =
    document.getElementById("explanationScreen");

const artistsScreen =
    document.getElementById("artistsScreen");

const soundboardScreen =
    document.getElementById("soundboardScreen");

const explanationButton =
    document.getElementById("explanationButton");

const artistsButton =
    document.getElementById("artistsButton");

const backButton =
    document.getElementById("backButton");

const artistCards =
    document.querySelectorAll(".artist-card");

const soundButtons =
    document.getElementById("soundButtons");

const featuredImage =
    document.getElementById("featuredImage");

const trackArtist =
    document.getElementById("trackArtist");

const trackTitle =
    document.getElementById("trackTitle");

const trackHint =
    document.getElementById("trackHint");

const boardTitle =
    document.getElementById("boardTitle");

const status =
    document.getElementById("status");

const audioPlayer =
    document.getElementById("audioPlayer");


const artists = {

    sophie: {

        name: "SOPHIE",

        image: "assets/imagens/sophie.jpg",

        theme: "theme-sophie",

        songs: [

            {
                title: "Faceshopping",
                file: "sophie-faceshopping.mp3"
            },

            {
                title: "VYZEE",
                file: "sophie-vyzee.mp3"
            },

            {
                title: "Faixa 03",
                file: "sophie-faixa-03.mp3"
            },

            {
                title: "OIL OF EVERY PEARL'S UN-INSIDES",
                file: "sophie-oil-of-every-pearls.mp3"
            },

            {
                title: "Faixa 05",
                file: "sophie-faixa-05.mp3"
            },

            {
                title: "Lemonade",
                file: "sophie-lemonade.mp3"
            }

        ]
    },


    bjork: {

        name: "BJÖRK",

        image: "assets/imagens/bjork.jpg",

        theme: "theme-bjork",

        songs: [

            {
                title: "Venus as a Boy",
                file: "bjork-venus-as-a-boy.mp3"
            },

            {
                title: "Faixa 02",
                file: "bjork-faixa-02.mp3"
            },

            {
                title: "Faixa 03",
                file: "bjork-faixa-03.mp3"
            },

            {
                title: "Faixa 04",
                file: "bjork-faixa-04.mp3"
            },

            {
                title: "fossora",
                file: "bjork-fossora.mp3"
            },

            {
                title: "Faixa 06",
                file: "bjork-faixa-06.mp3"
            }

        ]
    },


    charli: {

        name: "CHARLI XCX",

        image: "assets/imagens/brat.jpg",

        theme: "theme-charli",

        songs: [

            {
                title: "360",
                file: "charli-360.mp3"
            },

            {
                title: "Girl, so confusing",
                file: "charli-girl-so-confusing.mp3"
            },

            {
                title: "party 4 u",
                file: "charli-party-4-u.mp3"
            },

            {
                title: "B2b",
                file: "charli-b2b.mp3"
            },

            {
                title: "Faixa 05",
                file: "charli-faixa-05.mp3"
            },

            {
                title: "Mean girls",
                file: "charli-mean-girls.mp3"
            }

        ]
    }

};

explanationButton.addEventListener("click", function () {

    explanationScreen.scrollIntoView({
        behavior: "smooth"
    });

});


artistsButton.addEventListener("click", function () {

    artistsScreen.scrollIntoView({
        behavior: "smooth"
    });

});


artistCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const artistId =
            card.dataset.artist;

        openSoundboard(artistId);

    });

});

function openSoundboard(artistId) {

    const artist =
        artists[artistId];

    if (!artist) {
        return;
    }
    homeScreen.style.display = "none";

    soundboardScreen.style.display = "block";


    soundboardScreen.classList.remove(
        "theme-sophie",
        "theme-bjork",
        "theme-charli"
    );


    soundboardScreen.classList.add(
        artist.theme
    );


    boardTitle.textContent =
        artist.name;

    trackArtist.textContent =
        artist.name;

    trackTitle.textContent =
        "Escolha um som";

    trackHint.textContent =
        "Clique em um dos botões abaixo para reproduzir.";

    featuredImage.src =
        artist.image;

    featuredImage.alt =
        "Imagem de " + artist.name;


    audioPlayer.pause();

    audioPlayer.currentTime = 0;

    audioPlayer.removeAttribute("src");

    audioPlayer.load();


 

    status.textContent =
        " pronto para começar";

    createSoundButtons(artist);

}


function createSoundButtons(artist) {

    soundButtons.innerHTML = "";


    artist.songs.forEach(function (song, index) {

        const button =
            document.createElement("button");


        button.classList.add(
            "sound-button"
        );


        button.innerHTML = `
            <strong>
                ${String(index + 1).padStart(2, "0")}
            </strong>
            <br>
            ${song.title}
        `;


        button.addEventListener(
            "click",
            function () {

                playSound(
                    song,
                    button,
                    artist
                );

            }
        );


        soundButtons.appendChild(button);

    });

}


function playSound(
    song,
    selectedButton,
    artist
) {


    const allButtons =
        document.querySelectorAll(
            ".sound-button"
        );

    allButtons.forEach(function (button) {

        button.classList.remove(
            "active"
        );

    });

    selectedButton.classList.add(
        "active"
    );

    trackArtist.textContent =
        artist.name;

    trackTitle.textContent =
        song.title;

    trackHint.textContent =
        "Reproduzindo o som selecionado.";


    featuredImage.src =
        artist.image;

    audioPlayer.pause();

    audioPlayer.currentTime = 0;


 
    audioPlayer.src =
        "assets/sons/" + song.file;
    audioPlayer.load();

    audioPlayer.play()
        .then(function () {
            status.textContent =
                " tocando agora";
        })
        .catch(function () {
            status.textContent =
                " coloque o arquivo de áudio na pasta assets/sons";

        });
}  VOLTA 
backButton.addEventListener(
    "click",
    function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.removeAttribute(
            "src"
        );
        audioPlayer.load();
        soundboardScreen.style.display =
            "none";
        homeScreen.style.display =
            "block";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
)
audio.src = "assets/sons/sophie-ponyboy.mp4";
audio.load();
audio.play();
