/*--- Comment ---*/
// error.js manages the different error levels.

/*--- Global Variables ---*/


/*--- Global Functions ---*/

  function myErrorFunction( code ){

    console.log('ERROR FUNCTION');

    console.log( '### error code: ' + code );

    if( code === 'autobot' ){
      //autoBot();
      var loadingTime = 2000;
      setInterval( function() {
        loadPost( loadingTime );
      }, loadingTime + 2000 );

    } else if( code === 'flicker' ){
      flickerTextInterval();
      flickerInterval();

    } else if( code === 'body' ){
      $('body').addClass('error');

    } else if( code === 'picMessage' ){
      picMessage();

    }
  }

  function picMessage(){
    console.log( '### picMessage ###' );
    $('.myBubble').first().addClass('debug');
    var url = window.location.href;     // Returns full URL
    $('.myBubble').html('<img src="' + url + 'img/messages/0.jpg" class="" alt="error">');
  }

/*--- Events ---*/
$( function() {
  console.log( '### ERROR.JS ###' );

});



