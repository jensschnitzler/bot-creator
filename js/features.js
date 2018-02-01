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

  });



