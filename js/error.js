/*--- Comment ---*/
// error.js manages the different error levels.

/*--- Global Variables ---*/

  var myTerminal = $('.terminal');
  var myConsole = $('.console-unit');
  var myTerminalContent = $('.terminal .t-content');
  var myTerminalHead = $('.terminal .t-header span');

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

    } else if( code === 'vidMessage' ){
      vidMessage();

    } else if( code === 'changeBackground' ){
      changeBackground();

    } else if( code === 'autoBot' ){
      autoBot();

    } else if( code === 'glitchRepeat' ){
      setInterval(function(){ glitchRepeat(); }, 10000);

    }

  }

  function autoBot( loadCycleTime ){
      //var loadCycleTime = 5000;

      myTerminalContent.prepend('<p>bot-autopopulation initiated</p>');
      crazyTime = true; // trigger crazySlider

      var timerID = setInterval(function () {
        loadBot( loadCycleTime );
      }, loadCycleTime);

      allCrazySliders( loadCycleTime );

      setTimeout(function(){
        support2();
      }, 3000);
  }

  function postCounterEvents(){

    /*

    if( postCounter === 0 ){
      $('.inventory-list .placeholder').first().animate({opacity: 0});
      $('.inventory-list .placeholder').first().animate({maxHeight: 0});
      $('.inventory-list .placeholder').first().fadeOut();
    }
    if( postCounter === 1 ){
      myErrorFunction( 'picMessage' );
    }
    if( postCounter === 2 ){
      myErrorFunction( 'flicker' );
    }
    if( postCounter === 3 ){
      //glitchRepeat();
    }
    if( postCounter === 4 ){
      myErrorFunction( 'picMessage' );
      myErrorFunction( 'glitchRepeat' );
    }
    if( postCounter === 5 ){
      myErrorFunction( 'vidMessage' );
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
    if( postCounter === 12 ){
      myErrorFunction( 'autoBot' );
    }
    if( postCounter === 13 ){

    }
    if( postCounter === 20 ){
      support3();
    }
    if( postCounter === 30 ){
      support4();
    }
    */
  }

  function botCounterEvents(){

    /*

    if( botCounter === 3){
      myTerminal.addClass('error');
      myConsole.addClass('error');
      myTerminalContent.prepend('<p>initiating terminal</p>');
    }
    if( botCounter === 4){
      myTerminalContent.prepend('<p>checking bot activity</p>');
    }
    if( botCounter === 5){
      myTerminalContent.prepend('<p>bot limit almost reached</p>');
      //myTerminalHead.html('alert: overwrite');
    }
    if( botCounter === 6){
      myTerminalContent.prepend('<p>bot limit almost reached</p>');
      //myTerminalHead.html('alert: overwrite');
    }
    if( botCounter === 7){
      myErrorFunction( 'autoBot' );
    }
    if( botCounter === 15){
      myErrorFunction( 'changeBackground' );
    }
    if( botCounter >= 17){
      distortFace();
    }
    if( botCounter >= 19){
      glitchStripes();
    }
    if( botCounter === 22){
      myTerminalContent.prepend('<p>network alert:<br>bot population exceeds human population on current network</p>');
    }

    */

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
    $( '.overlay.error' ).fadeTo( 30000 , .4, function() {
      // Animation complete.
    });
  }

  function distortFace(){
    console.log( '## distortFace ##' );
    var myFace = $( '.profilePic:visible' ).random();
    myFace.css( 'background-size','1000% 100%' ); // animate with css transition!

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



