// Constantly scroll down
// source: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c


/*
  1 - make stage higher than window
  2 - scroll window to bottom of stage slowly
  3 - as soon as window comes close to bottom of stage:
  4 - repeat from 1
*/

/* GENERAL VARIABLES */

var myWindow = $(window);
var myStage = $('.stage');


/* FUNCTIONS */

  /* expand stage */
  function setStage() {

    $("html, body").animate({ scrollTop: $(document).height() }, 10000);
    //return false;

    var myDocumentHeight = $(document).height();
    var myWindowHeight = myWindow.height();
    var myWindowScrollBottom = myWindow.scrollTop() + myWindowHeight;
    var tolerance = 100;

    if ( myDocumentHeight <= myWindowScrollBottom + tolerance ) {
      var myVH = myWindowHeight/2;
      var myStageHeight = myStage.height();
      myStage.height( myStageHeight + myVH + 'px' );
    }

    /*
    var myConsole = $('.console');
    var myConsoleTop = myConsole.offset().top();
    myConsole.css({
      'top': myConsoleTop + addHeight + 'px'
    });
    */
  };



$(document).ready(function() {

  console.log('scroller.js');

  var i = 0;

  setInterval(function() {
    i++;
    console.log( 'scroll: ' + i );

    myStage.children().each( function( index ) {
      console.log( index + ": " + $( this ).text() );
    });

  }, 1000);


/*
  var scrolling = false;

  $(window).scroll(function() {
    scrolling = true;
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        scrolling = false;
        console.log("Haven't scrolled in 2s!");
    }, 2000));
  });

  setInterval(function() {
    if ( scrolling === false ) {
      setStage();
    } else {
      console.log( 'scrolling: ' + scrolling );
    }
  }, 1000);
*/

}); // closing function: "$(document).ready"