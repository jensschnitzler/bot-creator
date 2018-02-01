/*--- Comment ---*/
// slider.js manages the range-slider inputs in the console.

/*--- Global Variables ---*/
  var randomTime = Math.floor((Math.random() * 1000) + 1);
  var crazyTime = false;


  var temperValues = {
    "0": "passive",
    "1": "moderate",
    "2": "agressive",
    "3": "highly agressive"
  };

  var attitudeValues = {
    "0": "extrem-con",
    "1": "conservative",
    "2": "apolitical",
    "3": "liberal",
    "4": "progressive"
  };

  var activityValues = {
    "0": "low",
    "1": "average",
    "2": "high"
  };

/*--- Functions ---*/

  function crazySlider( input, min, max ){
    console.log('### CRAZY SLIDER ###');
    setInterval(function(){

      var random = Math.round( (Math.random() * max) + min );

      input.val( random );
      displayVals( input );

    }, 200 );

  };

  function displayVals( input ){
    var myInput = $( input );
    var myValue = myInput.val();
    var myTitle = myInput.siblings('.slider-title');

    if( myInput.is('.slider-temper') ) {
      myTitle.text(temperValues[myValue]);

    } else if( myInput.is('.slider-attitude') ) {
      myTitle.text(attitudeValues[myValue]);

    } else if( myInput.is('.slider-age') ) {
      var myAge = myValue;
      myTitle.text('age ' + myAge + ' years');

    } else if( myInput.is('.slider-activity') ) {
      myTitle.text(activityValues[myValue] + ' activity');

    } else {
      myTitle.html( myValue );
    }

  };


  // The Random Function
  $.fn.random = function() {
    return this.eq( Math.floor( Math.random() * this.length ) );
  }

/*--- Events ---*/
$( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

  $('input.slider').change( function(){
    displayVals( this );
  });

  $('input.slider').each(function(){
    displayVals( this );
  })

  var crazyTimeChecker = setInterval(function(){

    if( crazyTime === true ){
      clearInterval( crazyTimeChecker ); // break loop
      $('input.slider').each( function() {
          var mySlider = $( this );
          var min = mySlider.prop('min');
          var max = mySlider.prop('max');
          crazySlider( mySlider, min, max );
        });
    }

  }, 3000);

});



