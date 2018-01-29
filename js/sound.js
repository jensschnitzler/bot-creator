/*--- Comment ---*/
// sound.js manages all the sound and noise functions.

/*--- Global Variables ---*/

 var soundSmokeDetector = 'https://freesound.org/data/previews/369/369848_1480854-lq.ogg';
 var soundSciFi = 'https://freesound.org/data/previews/14/14259_18811-lq.mp3';

/*--- Global Functions ---*/

  function error( code ){

  };

/*--- Events ---*/
$( function() {


  var audio = $("#mySoundClip")[0];
  $(".audio")
    .mouseenter(function() {
      audio.play();
    })
    .mouseleave(function() {
      audio.pause();
    });

});



