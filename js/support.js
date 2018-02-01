/*--- Comment ---*/
// support.js manages all the support messages.

/*--- Global Variables ---*/
  var supportLevel = $('.support-level');

/*--- Sound Variables ---*/


/*--- Global Functions ---*/
  function support1(){
    console.log( '## support1 ##' );
    createElement('support');
    newWinContent.html(
      '<p>Every second hostile bots are up to mischief: spamming, discrediting, biasing public opinions and limiting free speech.</p><p>Don’t find yourself being left behind, create your own bot army and let your voice be heard again.</p>'
      );
  }

  function support2(){
    console.log( '## support2 ##' );
    createElement('support');
    newWinButton.html( 'ok' );
    newWinContent.html(
      '<p>You entered autopopulation mode.</p>'
      );
  }

/*--- Events ---*/
$( function() {
  console.log( '### SUPPORT.JS ###' );
  support1();


});



