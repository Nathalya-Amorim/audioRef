// create a module for our project
(() => {
    // create a reference to the main headline (the first h2 element)
    let mainHeadline = document.querySelector('#main-headline');
        theAudio = document.querySelector('audio'),
        theThumbs = document.querySelectorAll('img');

// functions go in the middle -> the brains / logic of your app 

function loadAudioTrack() {
    theAudio.src = `audio/${this.dataset.trackref}.mp3`;

    theAudio.load();
    theAudio.play();

    debugger;
}

        // event handling goes here
        // listen for a click on the thumbnail images, load the right audio when the click happens

        theThumbs.forEach(thumb => thumb.addEventListener('click', loadAudioTrack));

    


})()
