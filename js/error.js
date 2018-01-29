/*--- Comment ---*/
// error.js manages the different error levels.

/*--- Global Variables ---*/


/*--- Global Functions ---*/

  function error( code ){
    console.log( 'error code: ' + code );
    if( code === 'autobot' ){
      var loadingTime = 2000;
      setInterval( function() {
        loadPost( loadingTime );
      }, loadingTime + 2000 );

    } else if( code === 'flicker' ){
      flickerTextInterval();
      flickerInterval();

    } else if( code === 'body' ){
      $('body').addClass('error');

    }
  };

/*--- Events ---*/
$( function() {


});



