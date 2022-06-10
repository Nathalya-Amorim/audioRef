// create a module for our project
(() => {
    // create a reference to the main headline (the first h2 element)

    // querySelector -> ('li' > a > .hidden')
    // querySelector can accept ANY valid CSS selector with any kind of complexity ( which makes it kinda like a Swiss Army knife for slecting elements) - use it for anything
    let mainHeadline = document.querySelector('#main-headline');
        theAudio = document.querySelector('audio'),
        theThumbs = document.querySelectorAll('img'),
        playBut = document.getElementById('play-button'),
        pauseBut = document.getElementById('stop-button'),
        rewindBut = document.getElementById('rewind-button'),
        volControl = document.getElementById('volume-control');

// functions go in the middle -> the brains / logic of your app 

function loadAudioTrack() {
    theAudio.src = `audio/${this.dataset.trackref}.mp3`;

    // run the load and play audio 
    theAudio.load();

    playAudio();

}

function playAudio() { theAudio.play(); }
function pauseAudio() { theAudio.pause(); }
function rewindAudio() { theAudio.currentTime = 0; }

function setVolume () {
    theAudio.volume = this.value / 100;
}


        // event handling goes here
        // listen for a click on the thumbnail images, load the right audio when the click happens

        theThumbs.forEach(thumb => thumb.addEventListener('click', loadAudioTrack));

        playBut.addEventListener('click', playAudio);
        pauseBut.addEventListener('click', pauseAudio);
        rewindBut.addEventListener('click', rewindAudio);
        volControl.addEventListener('change', setVolume);

})()
