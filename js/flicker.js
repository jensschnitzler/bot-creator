/*--- Comment ---*/
// flicker.js manages the functions to let html elements flicker around.

/*--- Global Functions ---*/

  function flicker( element ){
    console.log( 'flicker: ' + element[0] );
    if( element.is(':visible') ) {
      element.find('*').hide(); // returns all descendants
      element.css('visibility','hidden');
      setTimeout(function() {
        element.find('*').show(); // returns all descendants
        element.css('visibility','visible');
      }, 40);
    }
  }

  function flickerInterval(){
    setInterval(function(){
      var flickerElement = $('div:visible').random();
      flicker( flickerElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 4000 + randomTime );
  }

  function flickerText( element ){
    var originalString = element.html();
    //console.log( 'flickerText: ' + originalString );
    // get random character, which will be replaced
    var myCharacters = ['a','e','i','o','u'];
    var randomCharacter = myCharacters[Math.floor(Math.random() * myCharacters.length)];
    var newString = originalString.replace(/a/gi, '&#x25a1;'); // replace 'a'/'A' character with '!'
    element.html( newString );
    setTimeout(function() {
      element.html( originalString );
    }, 120);
  }

  function flickerTextInterval(){
    setInterval(function(){
      var flickerElement = $('p:visible').random();
      //flickerElement.css('background','red'); // debug
      flickerText( flickerElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 2000 + randomTime );
  }

  function exchangeWords( element1, element2 ){

    console.log( '## exchangeWords ##' );

    var string1 = element1.html();
    var string2 = element2.html();

    console.log( string1 );
    console.log( string2 );

    var wordArray1 = string1.split(" "); // split at space
    var wordArray2 = string2.split(" "); // split at space

    var randomKey1 = Math.floor(Math.random() * wordArray1.length);
    var randomKey2 = Math.floor(Math.random() * wordArray2.length);

    var randomWord1 = wordArray1[randomKey1];
    var randomWord2 = wordArray2[randomKey2];

    if (randomKey1 !== -1) {
      wordArray1[randomKey1] = randomWord2;
    }

    if (randomKey2 !== -1) {
      wordArray2[randomKey2] = randomWord1;
    }

    var newString1 = wordArray1.join(" ");
    var newString2 = wordArray2.join(" ");

    console.log( newString1 );
    console.log( newString2 );

    element1.html( newString1 );
    element2.html( newString2 );
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

// EVENTS

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"
    console.log( '### FLICKER.JS ###' );

    var randomTime = Math.floor((Math.random() * 1000) + 1);

    //exchangeWords( $('.myBubble p').random(), $('.myBubble p').random() );

  });



