/*--- Comment ---*/
// sound.js manages all the sound and noise functions.

/*--- Global Variables ---*/
  var myAudioPlayer = $("#myAudioPlayer");
  var myAudioSource = $("#myAudioSource");
  var myAudio = $("#myAudioPlayer")[0];

/*--- Sound Variables ---*/
  var soundSmokeDetector = 'https://freesound.org/data/previews/369/369848_1480854-lq.ogg';
  var soundUnclickable = 'https://freesound.org/data/previews/207/207500_3844637-lq.ogg';
  var soundSciFi = 'https://freesound.org/data/previews/14/14259_18811-lq.mp3';
  var soundButton = 'https://freesound.org/data/previews/257/257357_4781497-lq.ogg';

/*--- Global Functions ---*/

  function changeSource(sourceUrl) {
    myAudioSource.attr("src", sourceUrl);
    /****************/
    //myAudioPlayer[0].pause();
    myAudioPlayer[0].load();//suspends and restores all myAudioPlayer element

    myAudioPlayer[0].oncanplaythrough = myAudioPlayer[0].play();
    /****************/
  }

/*--- Functions: Play Audio ---*/

  function audioUnclickable(){
    myAudioPlayer.prop('loop', false);
    changeSource(soundUnclickable);
    myAudio.play();
  }

  function audioButton(){
    myAudioPlayer.prop('loop', false);
    changeSource(soundButton);
    myAudio.play();
  }

  function audioSciFi(){
    myAudioPlayer.prop('loop', true);
    changeSource(soundSciFi);
    myAudio.play();
  }

/*--- Events ---*/
$( function() {

  $( document ).on("click", ".clicked", function() {
    audioUnclickable();
  });

  $(".audio")
    .mouseenter(function() {
      audioSciFi();
    })
    .mouseleave(function() {
      myAudio.pause();
    });

  $( document ).on("click", ".myButton", function() {
    audioButton();
  });

  $( document ).on("click", ".profilePic", function() {
    audioButton();
  });

  /*
  $( document ).on("click", ".clicked", function() {
    myAudioPlayer.prop('loop', false);
    changeSource(soundUnclickable);
    myAudio.play();
  });
  */


});



