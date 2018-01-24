// FUNCTIONS



// EVENTS

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

    /*
    $('.profilePic').hover(
      function(){ $(this).addClass('shake') },
      function(){ $(this).removeClass('shake') }
    )
    */

    // works on elements even when they're added after you bound the event handler
    var myInventoryList = $( '.inventory-list' );
    myInventoryList.on( "mouseenter", ".profilePic", function(){ $(this).addClass('shake') } );
    myInventoryList.on( "mouseleave", ".profilePic", function(){ $(this).removeClass('shake') } );

  });



