/*--- Global Variables ---*/
  var posCounter = 0;
  var docHeight = myDoc.height();
  var docWidth = myDoc.width();
  var winHeight = myWindow.height();
  var winWidth = myWindow.width();


/*--- Functions ---*/

  function closeOverlays() {
    $('.blur').removeClass('blur');
    $('.window').hide();
    clearTimeout(closeTimer); // in support.js

    $('.level').not('.main-level, .hidden').each(function(){

      var myOverlay = $(this);
      myOverlay.addClass("hidden");

      /*
      myOverlay.addClass("removing").delay(500).queue( function() {
        myOverlay.addClass("hidden").dequeue();
      });
      */
      //myOverlay.find('.window').addClass('hidden');
      /*
      myOverlay.find('.window').addClass("removing").delay(1000).queue( function() {
        myOverlay.find('.window').addClass("hidden").dequeue();
      });
      */

      if( myOverlay.is('.login-level') ) {
        console.log('… removing login level …');
        setTimeout(function(){ support1(); }, 1000);
        //support1();

      } else if( myOverlay.is('.support-level') ){
        console.log('… removing window on support level …');

      } else {
        console.log('… removing nothing from unknown level …');
      }

    });
  };

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
      newWin.appendTo( $(".profile-level") );
      setRandomPosition( newWin );
      newWin.addClass('hidden');
      //$('.profile-level').removeClass('hidden').removeClass('removing').show();
      //$('.main-level').addClass('blur');
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
      $('.main-level').addClass('blur');
      setCenterPosition( newWin );
      supportCloseTimer();

    } else {
      //setRandomPosition( newWin );
      console.log("could not create new element")
    }
  };

  function testWindowSize() {
    var testSize = $( "<div/>" ).appendTo( $('body') ).addClass( 'debug' ).css({
         'position' : 'fixed',
         'width' : '50vw',
         'height' : '50vh',
         'opacity' : '0.5',
         'pointer-events' : 'none',
         'z-index' : '9000'
      });
    testSize.html( docWidth + ' x ' + docHeight + '<br>' + winWidth + ' x ' + winHeight );
  }

  function setCenterPosition( element ) {

    var winHeight = myWindow.height();
    var winWidth = myWindow.width();
    var eHeight = element.outerHeight(); // window dimensions are calculated falsely :-(
    var eWidth = element.outerWidth();

    console.log( eWidth + ' x ' + eHeight );

    posCounter++;
    var eTop = (winHeight*0.5)-(eHeight*0.6);
    var eLeft = (winWidth*0.5)-(eWidth*0.5);

    element.css({
         'position' : 'fixed',
         //'left' : eLeft + 'px',
         //'top' :  eTop + 'px'
      });
    /* make new class */
    /*
    $("<style>")
      .prop("type", "text/css")
      .html("\
        .pos" + posCounter + " {\
            position: absolute;\
            top:" + eTop + "px;\
            left:" + eLeft + "px;\
        }")
      .appendTo( "head" );
    */
    element.addClass("pos" + posCounter );

    /* 3) get actual element offset */

    var eHeight = element.outerHeight();
    console.log('eHeight: ' + eHeight);
    var eWidth = element.outerWidth();
    console.log('eWidth: ' + eWidth);

    var eBottom = eHeight + eTop;
    console.log('eBottom: ' + eBottom);
    var eRight = eWidth + eLeft;
    console.log('eRight: ' + eRight);

    var diffRight = eRight - winWidth;
    console.log('diffRight: ' + diffRight);
    var diffBottom = eBottom - winHeight;
    console.log('diffBottom: ' + diffBottom);

    // 4) correct offset difference
    /*

    if( diffRight > 0 ){
      //element.addClass('debug');
      element.css({
          'left':'-=' + diffRight + 'px'
      });

    }

    if( diffBottom > 0 ){
      //element.addClass('debug');
      element.css({
          'top': '-=' + diffBottom + 'px'
      });
      element.removeAttr('style');
    }
    */

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

    var eHeight = element.outerHeight();
    console.log('eHeight: ' + eHeight);
    var eWidth = element.outerWidth();
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

    /*

    if( diffRight >= 0 ){
      //element.addClass('debug');
      element.css({
          'left':'-=' + diffRight + 100 + 'px',
          'margin-left':'-=' + diffRight + 'px'
      });
    }

    if( diffBottom >= 0 ){
      //element.addClass('debug');
      element.css({
          'top': '-=' + diffBottom + 100 + 'px',
          'margin-top':'-=' + diffBottom + 'px'
      });
    }

    */

  };

/*--- Events ---*/

$( document ).ready(function() {
  console.log("### WINDOWS.JS ###");

  //testWindowSize();

  /*
  // DEFAULTS:
  $( ".window" ).each(function( index ) { // position windows centered on load
    setCenterPosition( $(this) );
    $(this).draggable({ stack: ".window" });
  });
  */

  // CLICK "CLOSE":
  $( document ).on("click", ".close", function() { // works on class ".close" even if it's added after you bound the event handler
    var myWindow = $(this).parents(".window");
    myWindow.addClass("removing").delay(1000).queue( function() {
        $(this).addClass("hidden").dequeue();
    });

    closeOverlays();
  });

  // LOGIN WINDOW:
  $( ".window.login" ).each(function( index ) { // position login window centered
    setCenterPosition( $(this) );
    //setRandomPosition( $(this) );
    $(this).draggable({ stack: ".window" });
  });

  $( document ).on("click", ".window", function() { // works on class ".close" even if it's added after you bound the event handler
    closeOverlays();

    /*
    var myLevel = $(this).parents(".level");
    var myWindow = $(this);

    if( myLevel.is('.login-level') ) {
      console.log('… removing login level …');

      myLevel.addClass("removing").delay(1000).queue( function() {
          $(this).addClass("hidden").dequeue().hide();
          support1();
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
    */

  });


});