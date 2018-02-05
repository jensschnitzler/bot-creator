/*--- Comment ---*/
// error.js manages the different error levels.

/*--- Global Variables ---*/

  var myTerminal = $('.terminal');
  var myConsole = $('.console-unit');
  var myTerminalContent = $('.terminal .t-content');
  var myTerminalHead = $('.terminal .t-header span');

/*--- Global Functions ---*/

  function randomInterval( myFunction, minTime, maxTime ){
    setInterval(function(){
        myFunction();
        maxTime = maxTime - minTime;
        randomTime = Math.floor((Math.random() * maxTime) + minTime);
    }, randomTime );
  }

  function myErrorFunction( code ){

    console.log('ERROR FUNCTION');
    console.log( '### error code: ' + code );

    if( code === 'autoPost' ){
      //autoPost();
      if(! $('body').hasClass('auto-post') ){
        $('body').addClass('auto-post');
        var loadingTime = 2000;
        setInterval( function() {
          loadPost( loadingTime );
        }, loadingTime + 2000 );
      }

    } else if( code === 'flicker' ){
      flickerTextInterval();
      flickerInterval();

    } else if( code === 'body' ){
      $('body').addClass('error');

    } else if( code === 'picMessage' ){
      picMessage();

    } else if( code === 'vidMessage' ){
      vidMessage();

    } else if( code === 'changeBackground' ){
      changeBackground();

    } else if( code === 'glitchRepeat' ){ // post-related error
      randomInterval( glitchRepeat, 4000, 10000 );

    } else if( code === 'distortFace' ){
      randomInterval( distortFace, 15000, 35000 );

    } else if( code === 'silva' ){
      randomInterval( silva, 20000, 35000 );

    }

  }

  function postCounterEvents(){

    if( postCounter === 0 ){
      $('.inventory-list .placeholder').first().animate({opacity: 0});
      $('.inventory-list .placeholder').first().animate({maxHeight: 0});
      $('.inventory-list .placeholder').first().fadeOut();
    }
    if( postCounter === 1 ){
      //myErrorFunction( 'picMessage' );
    }
    if( postCounter === 2 ){
      myErrorFunction( 'flicker' );
    }
    if( postCounter === 3 ){
      exchangeWords( $('.myBubble p').random(), $('.myBubble p').random() );
    }
    if( postCounter === 4 ){
      //myErrorFunction( 'picMessage' );
      myErrorFunction( 'glitchRepeat' );
    }
    if( postCounter === 5 ){
      //myErrorFunction( 'vidMessage' );
    }
    if( postCounter === 8 ){
      myErrorFunction( 'autoPost' );
    }
    if( postCounter === 4 ){
      missingGlyphInterval();
    }
    if ( postCounter >= 10 ) {

      //var latestPost = $('.feed-list .feed-post').first();
      //latestPost.addClass( 'error' );
      //setRandomPosition( latestPost );
      //latestPost.appendTo('main-level');

    }
    if( postCounter === 13 ){
      exchangeWords( $('.myBubble p').random(), $('.myBubble p').random() );
    }
    if( postCounter >= 15 ){
      //support3();
    }
    if( postCounter === 20 ){
      support3();
    }
    if( postCounter === 30 ){
      support4();
    }
  }

  function botCounterEvents(){

    var randomTime = Math.floor((Math.random() * 2000) + 500); // get a random time between 500 and 2000 ms
    setTimeout(function(){

      if( botCounter === botLimit-3 ){
        myTerminal.addClass('error');
        myConsole.addClass('error');
        myTerminalContent.prepend('<p>initiating terminal</p>');
      }
      if( botCounter === botLimit-2 ){
        myTerminalContent.prepend('<p>checking bot activity</p>');
      }
      if( botCounter === botLimit-1 ){
        myTerminalContent.prepend('<p>bot limit almost reached</p>');
        myTerminalHead.html('alert');
      }
      if( botCounter === botLimit+2 ){

      }
      if( botCounter === botLimit+4 ){
        myErrorFunction( 'distortFace' );
        myErrorFunction( 'autoPost' );
      }
      if( botCounter === botLimit+6 ){
        glitchStripes();
      }
      if( botCounter === botLimit+8 ){
        myTerminalContent.prepend('<p>network alert:<br>bot population exceeds human population on current network</p>');
      }
      if( botCounter === botLimit+10 ){
        myErrorFunction( 'changeBackground' );
      }
      if( botCounter === botLimit+12 ){
        flickerTextInterval();
        flickerInterval();
      }
      if( botCounter === botLimit+14 ){
        exchangeWords( $('.myBubble p').random(), $('.myBubble p').random() );
      }
      if( botCounter === botLimit+20 ){
        myErrorFunction( 'silva' );
      }

    }, randomTime);

  }

  function picMessage(){
    console.log( '## picMessage ##' );

    var picArray = [ '0.jpg','1.jpg','2.jpg','3.jpg' ];
    getRandomFrom( picArray );
    var randomPic = myValue;

    var url = window.location.href;     // Returns full URL
    $('.myBubble').first().addClass('imgBubble');
    $('.myBubble').first().html('<img src="' + url + 'img/messages/' + randomPic + '" class="" alt="error">');
    //$('.myBubble').first().css('background-image', 'url(' + url + 'img/messages/0.jpg)');
  }

  function vidMessage(){
    console.log( '## vidMessage ##' );

    var vidArray = [ 'bird.gif','bird.gif' ];
    getRandomFrom( vidArray );
    var randomVid = myValue;

    var url = window.location.href;     // Returns full URL
    $('.myBubble').first().addClass('imgBubble');
    $('.myBubble').first().html('<img src="' + url + 'vid/' + randomVid + '" class="" alt="error">');

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
    console.log( '## missingGlyphInterval ##' );
    setInterval(function(){
      var myElement = $('p:visible').random();
      //myElement.css('background','red'); // debug
      missingGlyph( myElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 2000 + randomTime );
  }

  function changeBackground(){
    $( 'body' ).animate({body: '#000'});
    $( '.overlay.error' ).fadeTo( 1200000 , .3, function() {
      // Animation complete.
    });
  }

  function distortFace(){
    console.log( '## distortFace ##' );
    var myFace = $( '.profilePic:visible' ).random();
    myFace.css( 'background-size','300% 100%' ); // animate with css transition!

    /* // following doesnt work
    myFace.css( 'background-size','100% auto' );
    setTimeout(function(){
        myFace.animate({ backgroundSize: '800% auto' }, 3000);
     }, 3000);
    */
  }

  function glitchStripes(){
    console.log( '## glitchStripes ##' );

    var randomTime = Math.floor((Math.random() * 2000) + 1500);

    for (i = 0; i < 6; i++) {

      var randomTime = Math.floor((Math.random() * 6000) + 2000);

      setTimeout(function(){
        var myStripe = $( "<div/>" ) // creates a div element
                .addClass( "glitchStripe" );   // add window class
        myStripe.appendTo( $('body') );
       }, randomTime);
    }
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() {
  console.log( '### ERROR.JS ###' );
  //changeBackground();

});



