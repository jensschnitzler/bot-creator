/*--- Comment ---*/
// selfie.js manages the built in camera control.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

/*--- Events ---*/
$( function() {
  console.log( '### SELFIE.JS ###' );

  // SOURCE: https://davidwalsh.name/browser-camera
  // Grab elements, create settings, etc.
  var video = document.getElementById('video');

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
      });
  }
  // following: legacy code
  else if(navigator.getUserMedia) { // Standard
      navigator.getUserMedia({ video: true }, function(stream) {
          video.src = stream;
          video.play();
      }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
      navigator.webkitGetUserMedia({ video: true }, function(stream){
          video.src = window.webkitURL.createObjectURL(stream);
          video.play();
      }, errBack);
  } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
      navigator.mozGetUserMedia({ video: true }, function(stream){
          video.src = window.URL.createObjectURL(stream);
          video.play();
      }, errBack);
  }

  // Elements for taking the snapshot
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var video = document.getElementById('video');

  // snap function saves to canvas
  function snap() {
   context.drawImage(video, 0, 0, 640, 480);
  }

  // Trigger photo take by scroll
  $( window ).scroll(function() {
    context.drawImage(video, 0, 0, 640, 480);
  });

  // Trigger photo take by timer
  window.setInterval(snap, 800);

  // Trigger photo take by button
  document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
  });

  // Converts canvas to an image
  // SOURCE: https://davidwalsh.name/convert-canvas-image
  function convertCanvasToImage(canvas, callback) {
    var image = new Image();
    image.onload = function(){
      callback(image);
    }
    image.src = canvas.toDataURL("image/png");
  }

});



