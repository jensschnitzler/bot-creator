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

  function support3(){
    console.log( '## support3 ##' );
    createElement('support');
    newWinHeader.html( 'alert <span>&#9888;</span>' );
    newWinButton.html( 'help' );
    newWinContent.html(
      '<p>Unrecognized browser or device:</p><p>Your account was logged in from an unrecognized location.</p>'
      );
  }

  function support4(){
    console.log( '## support4 ##' );
    createElement('support');
    newWinHeader.html( 'Critical Error <span>&#9888;</span>' );
    newWinButton.html( 'fuck it' );
    newWinContent.html(
      '<p>Warning!</p><p>** YOUR COMPUTER HAS BEEN BLOCKED **</p><p>Your computer has alerted us that it has been infected with a virus and spyware. The following information is being stolen…</p><p>> Facebook login</p><p>> Credit Card Details</p><p>> Email Account Login</p><p>> Photos stored on this computer</p><p>You must contact us immediately so that our engineers can walk you through the removal process over the phone. Please call us with the next 5 minutes to prevent your computer from being disabled. </p><p>Please Contact Support</p>'
      );
  }

  function supportSuicide(){
    console.log( '## supportSuicide ##' );
    createElement('support');
    newWinHeader.html( 'Goodbye' );
    newWinButton.html( 'kill all bots' );
    newWinContent.html(
      '<p>System overload. Reseting to default. </p>'
      );
  }

/*--- Events ---*/
$( function() {
  console.log( '### SUPPORT.JS ###' );
  support1();


});



