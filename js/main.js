
$( document ).ready(function() {

  var myWindow = $('.window').first();
  myWindow.draggable({ stack: '.window' });

  //windowFunctions();
  /*
  function windowFunctions() {
    $( '.window' )
      .mouseenter(function() {
        $( this ).removeClass('minimize');
      })
      .mouseleave(function() {
        $( this ).addClass('minimize');
      })
      .click(function(e) {
        e.stopPropagation();
      });
  };
  */

  /*
  $( '.stage' ).click(function() {
    console.log('click content');
    newBox();
    //$( this ).children( e.stopPropagation() );
  });
  */

  /*
  function newBox() {
    console.log('function newBox');
    var stage = $(".stage");
    // create a new window:
    var newWindow = $('.window').clone();
    newWindow.draggable({ stack: '.window' }).addClass('minimize').appendTo( stage )
    windowFunctions();
    setPosition( newWindow );
  };
  */

  var i = 0;
  function setPosition( element ) {
    i++;
    var y = 0 + Math.floor((Math.random() * 70) );
    var x = 10 + Math.floor((Math.random() * 80) );
    /* make new class */
    $("<style>")
      .prop("type", "text/css")
      .html("\
      .pos" + i + " {\
          position: absolute;\
          top:" + y + "vh;\
          left:" + x + "vw;\
      }")
      .appendTo( "head" );
    element.addClass("pos" + i ).removeAttr('style');
  };

});