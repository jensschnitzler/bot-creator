/*--- Comment ---*/
// selection.js manages the selection inputs in the console.

/*--- Global Variables ---*/
  var objectiveArray = ['foster fame','spamming','mischief','bias public opinion','influence trends','like-follow','discretitize','attack free speech'];
  var supportingArray = [ 'happy','foodporn','dumptrump','trump','brexit','bernie','russia','maga','metoo'];
  var mySelectObjective = $('.select-objective');
  var mySelectSupporting = $('.select-supporting');

/*--- Functions ---*/

  function loopSelect( mySelect, myArray ){

    var currentVal = mySelect.html();
    var containsVal = myArray.includes( currentVal ); // returns "true" if array contains current value

    if( myArray.includes( currentVal ) ) {
      var valIndex = myArray.indexOf( currentVal ); // returns index of value in array
      if( valIndex >= myArray.length-1 ){       // current calue is last of array
        mySelect.html( myArray[0] );            // return first value of arrray
      } else {
        mySelect.html( myArray[ valIndex+1 ] ); // otherwise return next value of arrray
      }

    } else {
      mySelect.html( myArray[1] );
    }

  }

  function randomSelect( mySelect, myArray ){
    var randomVal = myArray[ Math.floor( Math.random() * myArray.length ) ];
    mySelect.html( randomVal );
  }

  function allRandomSelect(){
    console.log('## allRandomSelect ##');

    $('a.select').each( function() {
      var mySelect = $(this);

      if ( mySelect.is('.select-objective') ) {
        randomSelect( mySelect, objectiveArray );
      } else if ( mySelect.is('.select-supporting') ) {
        randomSelect( mySelect, supportingArray );
      } else {/*do nothing*/}
    });
  };

/*--- Events ---*/

  $( function() {
    console.log( '### SELECTION.JS ###' );

    $('.select').click(function(){
      var mySelect = $(this);

      if ( mySelect.is('.select-objective') ) {
        loopSelect( mySelect, objectiveArray );
      } else if ( mySelect.is('.select-supporting') ) {
        loopSelect( mySelect, supportingArray );
      } else {/*do nothing*/}

    });

  });



