/*--- Comment ---*/
// fullscreen.js manages the full screen mode.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

/*--- Events ---*/
$( function() {
  console.log( '### FULLSCREEN.JS ###' );
  toggleFullScreen();
  document.documentElement.requestFullscreen();
});



