/*--- Comment ---*/
// silva.js is a chaos monkey tool, that removes bits and pieces from the websites code.

/*--- Global Variables ---*/

  var silvaTime = false;

/*--- Functions ---*/

  function silva( element ){

    if ( element == null ){
      element = $('div').random();
    }

    var originalString = element.html();

    console.log( 'silva: ' + originalString );

    // get random character, which will be replaced
    var myCharacters = originalString.split();
    var randomCharacter = myCharacters[Math.floor(Math.random() * myCharacters.length)];

    var newString = originalString.replace( randomCharacter, '/ERROR/' ); // replace 'a'/'A' character with '!'

    element.html( newString );

    /*
    setTimeout(function() {
      element.html( originalString );
    }, 120);
    */
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

    /*
    setInterval(function(){
      console.log('silvaTime: …')
      if( silvaTime === true ){
        console.log('… yes')
        var myElement = $('div').random();
        //myElement.css('background','red'); // debug
        silva( myElement );
        randomTime = Math.floor((Math.random() * 6000) + 1000);
      } else {
        console.log('… not yet')
      }
    }, 7000 + randomTime );
    */

  });



