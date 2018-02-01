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

/*--- Global Functions ---*/

  function changeSource(sourceUrl) {
    myAudioSource.attr("src", sourceUrl);
    /****************/
    myAudioPlayer[0].pause();
    myAudioPlayer[0].load();//suspends and restores all myAudioPlayer element

    //myAudioPlayer[0].play(); changed based on Sprachprofi's comment below
    myAudioPlayer[0].oncanplaythrough = myAudioPlayer[0].play();
    /****************/
  }

/*--- Functions: Play Audio ---*/

  function audioUnclickable(){
    myAudioPlayer.prop('loop', false);
    changeSource(soundUnclickable);
    myAudio.play();
  }

/*--- Events ---*/
$( function() {

  $(".audio")
    .mouseenter(function() {
      myAudioPlayer.prop('loop', true);
      changeSource(soundSciFi);
      myAudio.play();
    })
    .mouseleave(function() {
      myAudioPlayer.prop('loop', false);
      myAudio.pause();
    });


  /*
  $( document ).on("click", ".clicked", function() {
    myAudioPlayer.prop('loop', false);
    changeSource(soundUnclickable);
    myAudio.play();
  });
  */


});



