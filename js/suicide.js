/*--- Comment ---*/
// suicide.js manages auto-restarts the page when it gets to trippy.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  function suicide(){
    location.reload(); // refresh page
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() {
  console.log( '### SUICIDE.JS ###' );

  var mySuicideInterval = setInterval(function(){
    if( botCounter > 30 || postCounter > 50 ){
      clearInterval( mySuicideInterval );

      console.log( '## … commiting suicide … ##' );
      supportSuicide();

      setTimeout(function(){
          suicide();
        }, 5000);

    }
   }, 10000);

});



