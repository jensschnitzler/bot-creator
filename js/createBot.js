// GENERAL VARIABLES

  var myDoc = $(document);
  var myWindow = $(window);
  var myStage = $('.stage');
  /* array/object that contains all the bots */
  var myBotsArray = [];
  var botCounter = -1;
  var postCounter = -1;
  /* This should be done as soon as the website has loaded: Get all possible bot data into cool arrays with "getAjaxBotData()" */
  var myArray = [];
  var myNamesArray = [];
  var myHashtagsArray = [];
  var myMessagesArray = [];

// FUNCTIONS

  function getAjaxBotData() {
    /* get JSON names */
    $.getJSON( "js/json/names.js", function( result ) {
      myNamesArray = result;
      console.log( 'myNamesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON hashtags */
    $.getJSON( "js/json/hashtags.js", function( result ) {
      myHashtagsArray = result;
      console.log( 'myHashtagsArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages */
    $.getJSON( "js/json/trump.js", function( result ) {
      myMessagesArray = result;
      console.log( 'myMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

  }

  function activityMeasure( element ) {
    /* activity number to activity description */
    var activity = element.activity;
    var activityDescription = "low"; //will become global variable
    if( activity >= 33 ) {
      activityDescription  = "average";
    } if( activity >= 66 ) {
      activityDescription  = "high";
    }
    element.activityDescription = activityDescription; // variable from function
  }

  function getMessages( element ) {
    /* get messages array values */
    messages = "";
    $.each( element.messages, function(index, value){
        messages += value + ' ';
    });
  }

  function getSupporting( element ) {
    /* get supporting array values */
    supporting = "";
    $.each( element.supporting, function(index, value){
      supporting += value + ' ';
    });
  }

  function setMessagePosition( element ) {
    var profile = $( '.profile' ).last();
    var pOffset = profile.offset();

    //$('.debug').removeClass('debug');
    //profile.addClass('debug');

    var newLeft = pOffset.left + 90;
    var newTop = pOffset.top + 50;

    element.css({
        'top' : newTop + 'px',
        'left' : newLeft + 'px'
      });

    //console.log( "left: " + pOffset.left + ", top: " + pOffset.top );
    //console.log( "newLeft: " + newLeft + ", newTop: " + newTop );
  };

  function getRandomFrom( array ) { // returns "myValue"
    /* get a random value out of an array */
    //console.log( 'getRandomFrom: ' + array );
    //console.log( 'getRandomFrom: ' + array.length );
    var randomKey = 0;
    myValue = '';
    randomKey = Math.floor( Math.random() * array.length ); // get random array key
    //console.log( 'randomKey: ' + randomKey );
    myValue = array[ randomKey ];
    //console.log( 'myValue: ' + myValue );
  }

  /* images array (just the number of bot profile images) */
  var imageCount = 500;

  function newBot() {

    console.log( "create new bot - botCounter:" + botCounter );

    // DETERMINE STRING VARIABLES

    /* get random name from myNamesArray */
    getRandomFrom( myNamesArray );
    var myName = myValue;
    //console.log( 'myName: ' + myName );

    /* get (random) image number */
    randomKey = Math.round( Math.random() * imageCount ); // get random
    var myImage = 'img/faces/' + randomKey + '.png'; // botCounter
    //console.log( 'myImage: ' + myImage );

    // CREATE BOT OBJECT AND PUSH TO "myBotsArray"

    /* push new bot data */
    myBotsArray.push({ // push new bot data to array
      id: botCounter,
      name: myName,
      image: myImage,
      messages:[ '…', ';-)'],
      supporting:[ '#hashtag' , '#facebook'],
      activity:'70',
      activityDescription:'',
      followers: '123',
      following: '1345'
    });

    // DETERMINE AND PUSH ARRAY VARIABLES

    for (i = 0; i < 5; i++) {
      /* get random message from myMessagesArray */
      getRandomFrom( myMessagesArray );
      var myMessage = myValue;
      myBotsArray[ botCounter ].messages.push( myMessage );
      //console.log( 'myMessage: ' + myMessage );

      /* get random hashtag from myHashtagsArray */
      getRandomFrom( myHashtagsArray );
      var myHashtag = myValue;
      myBotsArray[ botCounter ].supporting.push( myHashtag );
      //console.log( 'myHashtag: ' + myHashtag );
    }

    // OUTPUT
    createBotWindow( botCounter );
    addProfilePicToInventory( botCounter );

    // MORE
    //console.log( myBotsArray );
  };

  function createBotWindow( botID ) {
    /* get new bot data */
    var myBot = myBotsArray[ botID ];
    //console.log( myBot );
    /* create a new window / new bot shell*/
    createElement( "profile" );
    /* format new bot data for output */
    activityMeasure( myBot );
    getMessages( myBot ); // returns "messages"
    getSupporting( myBot );
    /* output new bot data to shell */
    newWinContent.html(
        '<div class=\'img-container\'><img src=' + myBot.image + '></div>' +
        '<p>ID: <em>' + myBot.id + '</em></p>' +
        '<p>Name: <br><em>' + myBot.name + '</em></p>' +
        '<p>Messages: <br><em>' + messages + '</em></p>' +
        '<p>Supporting: <br><em>' + supporting + '</em></p>' +
        '<p>Activity: <br><em>' + myBot.activityDescription + '</em></p>' +
        '<p>Followers: <br><em>' + myBot.followers + '</em></p>' +
        '<p>Following: <br><em>' + myBot.following + '</em></p>'
      );
    newWinHeader.children('h2').html( myBot.name );

    // add profilePic to Inventory
  };

  function addProfilePicToInventory( botID ) {
    var inventoryList = $(".inventory-list").first();

    // get bot data
    var myBot = myBotsArray[ botID ];

    var myListElement = $( "<li/>" ); // creates a li element
    var myProfilePic = $( "<div/>" )
                          .addClass( "profilePic" )
                          .html('');

    myListElement.append(myProfilePic).prependTo(inventoryList);

    /* make new class */
    $("<style>")
      .prop("type", "text/css")
      .html("\
      .profilePic" + botID + " {\
          background-image: url(" + myBot.image + ");\
      }")
      .appendTo( "head" );

    myProfilePic.addClass("profilePic" + botID ).removeAttr('style');

    // change inventory title:
    var counter = botID + 1; // bescause botID starts with 0
    $('.inventory-unit .c-header h1').html( 'inventory [' + counter + ']' )

  }

  function newMessage( message ) {
    var myInstruction = '';
    var myMessage = '';

    if( message == 'enters stage' ) {
      myInstruction = message;
    } else {
      myMessage = message;
    }
    /* create a new window / new bot shell*/
    createElement( "message" );
    //newWinHeader.children('h2').html( 'Message' );
    /* output new message data to shell */
    newWinContent.html(
        '<p><em>' + myInstruction + '</em>' + myMessage + '</p>'
      );
  };

  function newPost() {
    if( myBotsArray.length !== 0 ) {
      // get bot data:
      getRandomFrom( myBotsArray ); // returns "myValue"
      var myBot = myValue;
      var myBotID = myValue.id;
      getRandomFrom( myBot.messages ); // returns "myValue"
      var myBotMessage = myValue;

      // get corresponding profilePic in Inventory:
      var myInventoryProfilePic = $( '.inventory-list .profilePic' + myBotID ).first().addClass( 'active' );
      console.log( myInventoryProfilePic[0] );

      setTimeout(function(){
        myInventoryProfilePic.removeClass( 'active' );

      }, 3000);

      // get container element:
      var feedList = $('.feed-list').first();
      // create new html elements:
      var myListElement = $( '<li/>' )
                            .addClass( 'feed-post' )
                            .css({
                              "opacity": "0",
                              "max-height": "0vh",
                              }); // creates a li element
      var myProfilePic = $( '<div/>' )
                            .addClass( 'profilePic' )
                            .addClass( 'profilePic' + myBotID ) // get the same face as in the Inventory
                            .html('');
      var myBubble = $( '<div/>' )
                            .addClass( 'myBubble' )
                            .html( '<p>' + myBotMessage + '</p>' )
                            .append('<div class="stats"><span class="comments">0</span><span class="likes">0</span></div>');

      if ( !  $( '.feed-post' ).first().hasClass( 'reverse' ) ) {
        myListElement.addClass( 'reverse' );
      }

      myListElement.append(myProfilePic).append(myBubble).prependTo( feedList );

      jumpBall( myInventoryProfilePic, myProfilePic );

      setTimeout( function() {
        myListElement.animate({maxHeight: '100vh', opacity: '1'}, 300, "swing");
      }, 100);

    } else {
      alert('newPost failed: No bot data available!');
    }

    /* error: post leaves feed*/
    if ( postCounter >= 6 ) {
      myListElement.appendTo('main-level');
      myListElement.addClass( 'error' );
      setRandomPosition( myListElement );
    }

  };

  function jumpBall( element1, element2 ) {

    var myScrollTop = $(window).scrollTop();
    var myScrollLeft = $(window).scrollLeft();

    var e1Top = element1.offset().top - myScrollTop; //get the offset top of the element
    var e1Left = element1.offset().left - myScrollLeft;

    var e2Top = element2.offset().top - myScrollTop;
    var e2Left = element2.offset().left - myScrollLeft;

    console.log("e1Top : " + e1Top + " px // e1Left : " + e1Left + " px // e2Top : " + e2Top + " px // e2Left : " + e2Left + " px");

    var myBall = $( '<div/>' ).addClass( 'crazyBall' ).addClass('fly');

    myBall.addClass( element1.attr('class') );

    $( "body" ).append( myBall );

    myBall.css({
      "top": e1Top,
      "left": e1Left
    });

    myBall.animate({
      top: e2Top + "px",
      left: e2Left + "px"
    }, 100 );

    setTimeout( function() {
      myBall.removeClass('fly').remove(); // remove element from dom
    }, 1000);
  }

  function autoBot(){
    var timerID = setInterval(function () {
      loadBot( 5000 );
    }, 5000);
  };

  function loadProcess( myTime, myElement, myFunction ) {
    var i = 0;
    console.log( myElement + ': ' + i);
    var interval = myTime/100;
    /* get loading elements */
    var myLoadContainer = $( myElement );
    var myLoadBar = myLoadContainer.find('.load-bar span');
    var myLoadStatus = myLoadContainer.children('.load-status');
    /* show loading elements */
    myLoadContainer.slideDown().animate({opacity: 1});

    var timerID = setInterval(function () {
      i ++;
      /* show loading status */
      myLoadBar.css("width", i + "%" );
      //myLoadStatus.html( "<span>" + i + "</span>%" );
      myLoadStatus.html( i );

      if( i === 100 ) {
        audioButton(); // make a sound
        console.log( myElement + ': ' + i);
        myLoadStatus.html( 'complete' );
        myFunction();
        clearInterval( timerID );

        setTimeout( function() { // reset/hide loadBar and loadStatus after short time
          myLoadContainer.animate({opacity: 0}).slideUp();
        }, 500);
      }
    },interval);
  }

  function loadBot( myTime ) {
    botCounter++; // increase botCounter by 1
    loadProcess( myTime, '.loadBot', newBot );
    $('.inventory-unit').removeClass('hidden');
    botCounterEvents();
  };

  function loadPost( myTime ) {
    postCounter++; // increase postCounter by 1
    loadProcess( myTime, '.loadPost', newPost );
    $('.feed-unit').removeClass('hidden');
    postCounterEvents();
  };

  function chatBots(){
    var timerID = setInterval(function () {
      if( myBotsArray.length !== 0 ) {
        getRandomFrom( myBotsArray ); // returns "myValue"
        var myBot = myValue;
        var myBotID = myValue.id;
        getRandomFrom( myBot.messages ); // returns "myValue"
        var myBotMessage = myValue;

        createBotWindow( myBotID );
        //getRandomFrom( myMessagesArray ); // returns "myValue"
        //newMessage( myBotMessage ); // this creates a new message
      } else {
        console.log('No bot data available!');
      }
    }, 10000);
  };





// EVENTS
$( function() { //jQuery short-hand for "$(document).ready(function() { ... });"

  // DEFAULTS:
  getAjaxBotData(); // get all the possible bot data from external files into arrays


  // CLICK ON PROFILE TO TOGGLE CLASS "MINI"
  $( document ).on("click", ".profile", function() {
    $(this).toggleClass("mini");
  });

  // CLICK "CREATE-BOT":
  var botClicks = 0;

  $( ".create-bot" ).click( function() {
    var myButton = $( this );

    if (!myButton.hasClass('clicked')) {
      myButton.addClass( 'clicked' );
      botClicks++; // increase botClicks by 1
      console.log('create-bot clicked - botClicks: ' + botClicks );

      var loadingTime = 2000;
      loadBot( loadingTime );
      setTimeout( function() {
        myButton.removeClass( 'clicked' );
      }, loadingTime + 1000 ); // loadingTime + time to slideUp loading elements

    } else {
      audioUnclickable();
    }
  });

  // CLICK "NEW POST":


  $( document ).on("click", ".profilePic", function() {
    var myButton = $( this );
    if (!myButton.hasClass('clicked')) {
      myButton.addClass( 'clicked' );

      console.log('create-post clicked - postCounter: ' + postCounter );
      var loadingTime = 3000;
      loadPost( loadingTime );
      setTimeout( function() {
        myButton.removeClass( 'clicked' );
      }, loadingTime + 1000 ); // loadingTime + time to slideUp loading elements
    } else {
      audioUnclickable();
    }
  });



  // REGULAR CHECKS AND ACTIONS BEFORE BOTS ARE CREATED
  $( document ).ready(function() {
    if( myBotsArray.length == 0 ) {

      // FEED PLACEHOLDER ALERT
      var alertTimer = setInterval(function () {
        $('.feed-post.placeholder').find('span').each( function() {
          $( this ).toggle();
        });
      }, 3000);

      var i = 0;

      var checkTimer = setInterval(function () {
        i++;
        console.log( 'checking for bots … (' + i + ')' );
        if( !myBotsArray.length == 0 ) {
          console.log( '… bot detected (' + i + ')' );
          clearInterval( checkTimer ); // break loop
          clearInterval( alertTimer ); // break loop
          $('.feed-post.placeholder').first().animate({opacity: 0});
          //$('.myButton').removeClass('inactive');
          $('.c-header').children('.inactive').removeClass('inactive');
        } else {
          console.log( '… no bots found (' + i + ')' );
        }
      }, 3000);
    }
  });

});

