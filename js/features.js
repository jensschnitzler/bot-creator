/*--- Global Variables ---*/
// features.js contains small snippets of independent feature scripts


/*--- Functions ---*/

  function logOutAnimation( logOutTime ){
    /*do some log out animation stuff*/
  }

/*--- Events ---*/

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

    $('a.logout').click( function() {
      console.log('### LOGOUT ###');
      var logOutTime = 1000;
      logOutAnimation( logOutTime );
      setTimeout(function(){
        $('.login-level').removeClass('hidden');
        location.reload(); // refresh page
      }, logOutTime);
    });


    // mobile friendly touch/hover effect for buttons
    $( document ).on("mouseenter mousedown touchstart", ".myButton, a, .select", function() {
        $(this).addClass('hover');
    });

    $( document ).on("mouseleave mouseup touchend", ".myButton, a, .select", function() {
        $(this).removeClass('hover');
        setTimeout(function(){
          $(this).removeClass('hover');
        }, 1000);
    });


  });



