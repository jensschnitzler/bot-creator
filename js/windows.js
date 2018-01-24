/*--- Global Variables ---*/
  var posCounter = 0;

/*--- Functions ---*/

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
    var docHeight = myDoc.height();
    var winHeight = myWindow.height();

    posCounter++;
    var y = myWindow.scrollTop() + Math.floor( (Math.random() * winHeight) );
    var x = 1 + Math.floor( (Math.random() * 80) );
    /* make new class */
    $("<style>")
      .prop("type", "text/css")
      .html("\
      .pos" + posCounter + " {\
          position: absolute;\
          top:" + y + "px;\
          left:" + x + "vw;\
      }")
      .appendTo( "head" );
    element.addClass("pos" + posCounter ).removeAttr('style');
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