/*--- Comment ---*/
// autopilot.js manages what happens if no user activity is detected.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() {
  console.log( '### AUTOPILOT.JS ###' );

  setTimeout(function(){
      $('.hidden').removeClass('hidden');

      $('.support-level').addClass('hidden');
      $('.login-level').addClass('hidden');

      //myErrorFunction( 'autoBot' );
      //myErrorFunction( 'autoPost' );
    }, 30000);

});



