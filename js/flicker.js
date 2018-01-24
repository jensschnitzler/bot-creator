// FUNCTIONS

  function flicker( element ){
    console.log( 'flicker: ' + element[0] )

    if( element.is(':visible') ) {
      //element.hide();
      element.find('*').hide(); // returns all descendants
      element.css('visibility','hidden');

      setTimeout(function() {
        //element.show();
        element.find('*').show(); // returns all descendants
        element.css('visibility','visible');
      }, 40);

    }
  }


  function flickerText( element ){
    var originalString = element.html();

    console.log( 'flickerText: ' + originalString );

    // get random character, which will be replaced
    var myCharacters = ['a','e','i','o','u'];
    var randomCharacter = myCharacters[Math.floor(Math.random() * myCharacters.length)];

    var newString = originalString.replace(/a/gi, '!'); // replace 'a'/'A' character with '!'

    element.html( newString );

    setTimeout(function() {
      element.html( originalString );
    }, 120);

  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

// EVENTS

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

    var randomTime = Math.floor((Math.random() * 1000) + 1);

    setInterval(function(){
      var flickerElement = $('.window:visible').random();
      flicker( flickerElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 4000 + randomTime );


    setInterval(function(){
      var flickerElement = $('p:visible').random();
      //flickerElement.css('background','red'); // debug
      flickerText( flickerElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 2000 + randomTime );

  });



