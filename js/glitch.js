/*--- Comment ---*/
// glitch.js manages some visuel glitch effects.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

function glitchRepeat(){
  console.log( '## glitchRepeat ##' );

  //var container = $('.level:visible');
  //var element = container.find( $('.window:visible') ).first(); //.random()

  var element = $('.window:visible, .feed-post.error:visible').random(); //.random()
  var container = element.parent();
  //element.addClass('debug');
  //container.addClass('debug');

  for (var i = 1; i < 6; i++) {

    var clone = element.clone();

    //clone.addClass('debug2');
    clone.prependTo( container );

    var distance = 0.5 * i;

    clone.animate({
          'marginTop' : '+=' + distance + 'rem', //moves down
          'marginLeft' : '+=' + distance + 'rem' //moves Right
          }, 1000 );
  }
}


  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() {
  console.log( '### GLITCH.JS ###' );

  //glitchRepeat();

});



