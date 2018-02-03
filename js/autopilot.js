/*--- Comment ---*/
// autopilot.js manages what happens if no user activity is detected.

/*--- Global Variables ---*/
  var autopilotTimer = null;

/*--- Global Functions ---*/

  function startAutopilot() {
    // (re-)start autopilot

    //if (autopilotTimer != null) { // reset timer
      window.clearTimeout( autopilotTimer );
      autopilotTimer = null;
    //}

    //else { // start timer
      autopilotTimer = window.setTimeout(function(){
        $('.hidden').removeClass('hidden');
        $('.support-level').addClass('hidden');
        $('.login-level').addClass('hidden');

        loadBot( 2000 );

        //myErrorFunction( 'autoBot' );
        //myErrorFunction( 'autoPost' );
      }, 40000);
    //}
  }

/*--- Events ---*/
$( function() {
  console.log( '### AUTOPILOT.JS ###' );

  startAutopilot()

  /* on any event restart timer */
  $('*').on('click hover keydown keypress keyup mouseenter mouseleave mousemove mouseout mouseover mouseup scroll', function(){
    startAutopilot();
  });

});








