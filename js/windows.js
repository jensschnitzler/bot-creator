/*--- Global Variables ---*/
  var posCounter = 0;

/*--- Functions ---*/

  function createElement( myClass ) {
    /* set up and append a new window of a certain class/type */
    console.log( "create new element" );
    audioButton(); // make a sound

    newWin = $( "<div/>" ) // creates a div element
                    .addClass( "window" )   // add window class
                    .addClass( myClass );   // add custom class
    newWinHeader = $( "<div/>" )
                    .addClass( "w-header" )
                    .append( "<h2></h2><a class='close'>&#xd7;</a>" ); // append content
    newWinContent = $( "<div/>" )
                    .addClass( "w-content" );

    // append new window elements
    newWin.append(newWinHeader).append(newWinContent);
    newWin.draggable({ stack: newWin });

    if( myClass === 'message' ) {
      setMessagePosition( newWin );

    } else if( myClass === 'profile' ) {
      newWin.appendTo( $(".stage") );
      setRandomPosition( newWin );
      newWin.addClass('hidden');
      //newWin.addClass( "mini" );   // add window class

    } else if( myClass === 'support' ) {
      newWinButton = $( '<a/>' )
                      .addClass( 'close myButton' )
                      .html( 'continue' )
                      .appendTo( newWin );
                      // button with standard caption
      newWinHeader.html( 'note' ); // standard headline
      newWin.appendTo( $('.support-level') );
      $('.support-level').removeClass('hidden').removeClass('removing').show();
      setCenterPosition( newWin );

    } else {
      //setRandomPosition( newWin );
      console.log("could not create new element")
    }
  }

  function setCenterPosition( element ) {
    var docHeight = myDoc.height();
    var docWidth = myDoc.width();
    var winHeight = myWindow.height();
    var winWidth = myWindow.width();
    var eHeight = element.height();
    var eWidth = element.width();

    posCounter++;
    var y = (winHeight*0.5)-(eHeight*0.6);
    var x = (winWidth*0.5)-(eWidth*0.5);
    /* make new class */
    $("<style>")
      .prop("type", "text/css")
      .html("\
      .pos" + posCounter + " {\
          position: absolute;\
          top:" + y + "px;\
          left:" + x + "px;\
      }")
      .appendTo( "head" );
    element.addClass("pos" + posCounter ).removeAttr('style');
  };

  function setRandomPosition( element ) {

    /* 1) get random position values*/

    var winHeight = myWindow.height(); // * .6
    console.log('winHeight: ' + winHeight);
    var winWidth = myWindow.width();
    console.log('winWidth: ' + winWidth);
    var eTop = Math.floor( (Math.random() * winHeight) ); // random pixel value
    console.log('eTop: ' + eTop);
    var eLeft = Math.floor( (Math.random() * winWidth) );
    console.log('eLeft: ' + eLeft);

    /* 2) make new class */

    posCounter++;
    $("<style>")
      .prop("type", "text/css")
      .html("\
      .pos" + posCounter + " {\
          position: fixed;\
          top:" + eTop + "px;\
          left:" + eLeft + "px;\
      }")
      .appendTo( "head" );
    element.addClass("pos" + posCounter ).removeAttr('style');

    /* 3) get actual element offset */

    var eHeight = element.height();
    console.log('eHeight: ' + eHeight);
    var eWidth = element.width();
    console.log('eWidth: ' + eWidth);
    //var eTop = element.offset().top; //get the offset top of the element
    //console.log('eTop: ' + eTop);
    //var eLeft = element.offset().left; //get the offset left of the element
    //console.log('eLeft: ' + eLeft);
    var eBottom = eHeight + eTop;
    console.log('eBottom: ' + eBottom);
    var eRight = eWidth + eLeft;
    console.log('eRight: ' + eRight);

    var diffRight = eRight - winWidth;
    console.log('diffRight: ' + diffRight);
    var diffBottom = eBottom - winHeight;
    console.log('diffBottom: ' + diffBottom);

    /* 4) correct offset difference */

    if( diffRight > 0 ){
      //element.addClass('debug');
      element.css({
          'left':'-=' + diffRight + 'px'
      });
    }

    if( diffBottom > 0 ){
      //element.addClass('debug');
      element.css({
          'top': '-=' + diffBottom + 'px',
      });
    }

  };

/*--- Events ---*/

$( document ).ready(function() {

  console.log("### WINDOWS.JS ###");

  // DEFAULTS:
  $( ".window" ).each(function( index ) { // position windows randomly on load
    setCenterPosition( $(this) );
    $(this).draggable({ stack: ".window" });
  });

  // CLICK "CLOSE":
  $( document ).on("click", ".close", function() { // works on class ".close" even if it's added after you bound the event handler
    var myWindow = $(this).parents(".window");
    myWindow.addClass("removing").delay(1000).queue( function() {
        $(this).addClass("hidden").dequeue();
    });
  });

  // LOGIN WINDOW:
  $( ".window.login" ).each(function( index ) { // position login window centered
    setCenterPosition( $(this) );
    //setRandomPosition( $(this) );
    $(this).draggable({ stack: ".window" });
  });

  $( document ).on("click", ".window", function() { // works on class ".close" even if it's added after you bound the event handler
    var myLevel = $(this).parents(".level");
    var myWindow = $(this);

    if( myLevel.is('.login-level') ) {
      console.log('… removing login level …');

      myLevel.addClass("removing").delay(1000).queue( function() {
          $(this).addClass("hidden").dequeue().hide();
      });
    } else if( myLevel.is('.support-level') ){
      console.log('… removing window on support level …');

      myLevel.addClass("removing").delay(1000).queue( function() {
          $(this).addClass("hidden").dequeue().hide();
      });

      myWindow.addClass("removing").delay(1000).queue( function() {
          $(this).addClass("hidden").dequeue().hide();
      });
    } else {
      console.log('… removing nothing from unknown level …');
    }

  });


});