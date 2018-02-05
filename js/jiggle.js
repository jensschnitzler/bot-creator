/*--- Comment ---*/
// jiggle.js makes the profilePic shake on hover.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

/*--- Events ---*/

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"
    console.log( '### JIGGLE.JS ###' );

    // works on elements even when they're added after you bound the event handler
    var myInventoryList = $( '.inventory-list' );
    myInventoryList.on( "mouseover mouseenter", ".profilePic", function(){
        $( this ).not( '.clicked' ).addClass('shake');
      });
    myInventoryList.on( "click mouseleave touchend", ".profilePic", function(){
      $(this).removeClass('shake');
    });

  });



