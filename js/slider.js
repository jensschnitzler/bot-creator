/*--- Global Variables ---*/
  var randomTime = Math.floor((Math.random() * 1000) + 1);
  var crazySlider = false;

/*--- Functions ---*/

  function crazySlider( element ){
    console.log('### CRAZY SLIDER ###');
    setInterval(function(){

      var random = Math.floor( (Math.random() * 100) + 1 );

      //console.log('random: ' + random);

      element.val(random);
    }, 100 );

    /*
    setInterval(function(){
      var flickerElement = $('.window:visible').random();
      flicker( flickerElement );
      randomTime = Math.floor((Math.random() * 1000) + 1);
    }, 100 + randomTime );
    */
  }

  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/

  $( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

    if( crazySlider === true ){
      $('input.slider').each( function() {
          var mySlider = $( this );
          crazySlider( mySlider );
        });
    }

  });



