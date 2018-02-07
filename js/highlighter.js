/*--- Comment ---*/
// highlighter.js hightlights tags and stuff.

/*--- Global Variables ---*/

/*--- Global Functions ---*/

  function highlight( element ){
    console.log( '## highlight ##' );

    if ( element == null ){
      element = $('body');
    }
    element.find('p').each(function() {
      var myPara = $( this );
      //myPara.addClass( 'debug' );
      //var str = myPara.html();

      myPara.html( myPara.text().replace(/([\#\@]\w+\b)/g, '<span class="hashtag">$1</span>') );
      //myPara.html( myPara.text().replace(/(\@\w+\b)/g, '<span class="hashtag">$1</span>') );

      //var res = str.replace(/\#\w+\b/ig, '<span class="hastag">'$1'</span>'); //[a-zA-Z]
      //var res2 = res1.replace(/[a-zA-Z]+/i, 'lol');
      //myPara.html(res);
    });
  }

/*--- Events ---*/
$( function() {
  console.log( '### HIGHLIGHT.JS ###' );

  highlight();

});



