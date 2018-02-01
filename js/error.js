/*--- Comment ---*/
// error.js manages the different error levels.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  function myErrorFunction( code ){

    console.log('ERROR FUNCTION');
    console.log( '### error code: ' + code );

    if( code === 'autoPost' ){
      //autoPost();
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

    } else if( code === 'changeBackground' ){
      changeBackground();

    }
  }

  function postCounterEvents(){
    if( postCounter === 1 ){
      $('.inventory-list .placeholder').first().animate({opacity: 0});
      $('.inventory-list .placeholder').first().animate({maxHeight: 0});
      $('.inventory-list .placeholder').first().fadeOut();
    }
    if( postCounter === 2 ){
      myErrorFunction( 'flicker' );
      myErrorFunction( 'picMessage' );
    }
    if( postCounter === 3 ){
      myErrorFunction( 'body' );
    }
    if( postCounter === 4 ){
      /*do some stuff*/
    }
    if( postCounter === 5 ){
      myErrorFunction( 'autoPost' );
    }
    if( postCounter === 6 ){
      missingGlyphInterval();
    }
    if ( postCounter >= 5 ) {
      var latestPost = $('.feed-list .feed-post').first();
      latestPost.addClass( 'error' );
      setRandomPosition( latestPost );
      latestPost.appendTo('body');
    }
  }

  function botCounterEvents(){
    var myTerminal = $('.terminal');
    var myConsole = $('.console-unit');
    var myTerminalContent = $('.terminal .t-content');
    var myTerminalHead = $('.terminal .t-header span');

    if( botCounter === 1){

      myTerminal.addClass('error');
      myConsole.addClass('error');
      myTerminalContent.prepend('<p>bot limit almost reached</p>');
    }
    if( botCounter === 2){
      myTerminalContent.prepend('<p>network alert:<br>bot population exceeds human population on current network</p>');
    }
    if( botCounter === 3){
      myTerminalContent.prepend('<p>bot-autopopulate initiated</p>');
    }
    if( botCounter === 4){
      myTerminalContent.prepend('<p>bot-autopopulate initiated</p>');
    }
    if( botCounter === 5){
      myTerminalHead.html('alert: overwrite');
    }
    if( botCounter === 6){
      support2();
      autoBot();
    }

  }

  function picMessage(){
    console.log( '### picMessage ###' );
    //$('.myBubble').first().addClass('debug');
    var url = window.location.href;     // Returns full URL
    $('.myBubble').first().addClass('imgBubble');
    $('.myBubble').first().html('<img src="' + url + 'img/messages/0.jpg" class="" alt="error">');
    //$('.myBubble').first().css('background-image', 'url(' + url + 'img/messages/0.jpg)');
  }

  function missingGlyph( element ){
    var originalString = element.html();
    // get random character, which will be replaced
    var myCharacters = ['a','e','i','o','u'];
    var randomCharacter = myCharacters[Math.floor(Math.random() * myCharacters.length)];
    var newString = originalString.replace(/a/i, '&#x25a1;'); // replace 'a'/'A' character with '!'
    element.html( newString );
  }

  function missingGlyphInterval(){
    setInterval(function(){
      var myElement = $('p:visible').random();
      //myElement.css('background','red'); // debug
      missingGlyph( myElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 2000 + randomTime );
  }

  function changeBackground(){
    $( '.overlay.error' ).fadeTo( 30000 , .7, function() {
      // Animation complete.
    });
  }

/*--- Events ---*/
$( function() {
  console.log( '### ERROR.JS ###' );
  //changeBackground();

});



