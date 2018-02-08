/*--- Comment ---*/
// liker.js increases likes and comments.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  function like(){
    console.log( '## like ##' );

    var intervalTime = 5000;

    var likeInterval = setInterval(function(){

      var myStats = $('.stats span').random();
      var myInteger = parseInt( myStats.html() );

      myStats.html( myInteger + 1 );

      if( postCounter >= 2 ){
        intervalTime = intervalTime / (postCounter / 2); // more posts, higher frequency
      }

    }, intervalTime);
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() {
  console.log( '### LIKER.JS ###' );

  like();

});



