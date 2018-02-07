// GENERAL VARIABLES

  var url = window.location.href;     // Returns full URL
  var myDoc = $(document);
  var myWindow = $(window);
  var myStage = $('.profile-level');
  /* array/object that contains all the bots */
  var myBotsArray = [];
  var botCounter = -1;
  var botLimit = 5;
  var postCounter = -1;
  var postLimit = 12;
  /* This should be done as soon as the website has loaded: Get all possible bot data into cool arrays with "getAjaxBotData()" */
  var myArray = [];
  var myNamesArray = [];
  var myHashtagsArray = [];
  var myMessagesArray = [];
  var bernieMessagesArray = [];
  var brexitMessagesArray = [];
  var dumptrumpMessagesArray = [];
  var foodpornMessagesArray = [];
  var happyMessagesArray = [];
  var magaMessagesArray = [];
  var metooMessagesArray = [];
  var russiaMessagesArray = [];
  var trumpMessagesArray = [];

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

    /* get JSON messages supporting bernie */
    $.getJSON( "js/json/supporting/bernie.js", function( result ) {
      bernieMessagesArray = result;
      console.log( 'bernieMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting brexit */
    $.getJSON( "js/json/supporting/brexit.js", function( result ) {
      brexitMessagesArray = result;
      console.log( 'brexitMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting dumptrump */
    $.getJSON( "js/json/supporting/dumptrump.js", function( result ) {
      dumptrumpMessagesArray = result;
      console.log( 'dumptrumpMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting foodporn */
    $.getJSON( "js/json/supporting/foodporn.js", function( result ) {
      foodpornMessagesArray = result;
      console.log( 'foodpornMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting happy */
    $.getJSON( "js/json/supporting/happy.js", function( result ) {
      happyMessagesArray = result;
      console.log( 'happyMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting maga */
    $.getJSON( "js/json/supporting/maga.js", function( result ) {
      magaMessagesArray = result;
      console.log( 'magaMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting metoo */
    $.getJSON( "js/json/supporting/metoo.js", function( result ) {
      metooMessagesArray = result;
      console.log( 'metooMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting russia */
    $.getJSON( "js/json/supporting/russia.js", function( result ) {
      russiaMessagesArray = result;
      console.log( 'russiaMessagesArray: ' + result );
    })
    .done(function(){console.log( "done" );})
    .fail(function(){console.log( "error" );})
    .always(function(){console.log( "complete" );});

    /* get JSON messages supporting trump */
    $.getJSON( "js/json/supporting/trump.js", function( result ) {
      trumpMessagesArray = result;
      console.log( 'trumpMessagesArray: ' + result );
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
  var imageCount = 492;

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

    var mySupportingVal = $('.select-supporting').first().html();
    console.log( 'mySupportingVal: ' + mySupportingVal );

    // CREATE BOT OBJECT AND PUSH TO "myBotsArray"

    /* push new bot data */
    myBotsArray.push({ // push new bot data to array
      id: botCounter,
      name: myName,
      image: myImage,
      messages:[ '*lol*', ';-)'],
      supporting:[ mySupportingVal ],
      activity:'70',
      activityDescription:'',
      followers: '123',
      following: '1345'
    });

    // DETERMINE AND PUSH ARRAY VARIABLES

    var myMessagesArray = window[ mySupportingVal + 'MessagesArray' ]; // window[…] is needed to turn the string into a variable-name
    console.log( 'myMessagesArray: ' + myMessagesArray );

    for (i = 0; i < 20; i++) {
      /* get random message from myMessagesArray */
      getRandomFrom( myMessagesArray ); // myMessagesArray
      var myMessage = myValue;
      myBotsArray[ botCounter ].messages.push( myMessage );
      //console.log( 'myMessage: ' + myMessage );

      /* get random hashtag from myHashtagsArray for random support */
      /*
      getRandomFrom( myHashtagsArray );
      var myHashtag = myValue;
      myBotsArray[ botCounter ].supporting.push( myHashtag );
      //console.log( 'myHashtag: ' + myHashtag );
      */
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
                          .addClass("profilePic" + botID )
                          .data( 'data-botID', botID )
                          .removeAttr('style')
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

    //myProfilePic.addClass("profilePic" + botID ).removeAttr('style');

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

  var processingPost = false;

  function newPost( myTime, myBot ) {
    if( myBotsArray.length !== 0 && processingPost === false ) {

      processingPost = true;
      loadProcessB( myTime, '.loadPost' );

    /* post preparation */

      // get bot data:
      //getRandomFrom( myBotsArray ); // returns "myValue"
      //var myBot = myValue;
      var myBotID = myBot.id;
      var myBotSupporting = myBot.supporting;

      /* text, picture or video message? */
      var messageKey = Math.random() * 6; // get random key: 0–4
      console.log( 'random message key: ' + messageKey );
      console.log( 'myBot.supporting: ' + myBot.supporting );

      if( messageKey <= 1 ){ // image
        var picArray = [ '0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg' ];
        getRandomFrom( picArray ); // returns myValue
        var randomPic = myValue;

        //$('.myBubble').first().addClass('imgBubble');
        var myBotMessage = '<img src="' + url + 'img/messages/' + myBotSupporting + '/' + randomPic + '" class="" alt="error">';

      } else if( messageKey <= 2 ) { // video
        var vidArray = [ '1.mp4','2.mp4' ];
        getRandomFrom( vidArray ); // returns myValue
        var randomVid = myValue;

        //$('.myBubble').first().addClass('imgBubble');
        //var myBotMessage = '<img src="' + url + 'vid/' + randomVid + '" class="" alt="error">';
        var myBotMessage = '<video autoplay loop muted><source src="' + url + 'vid/' + myBotSupporting + '/' + myBotSupporting + '-' + randomVid + '" type="video/mp4" />Your browser does not support the video tag.</video>';

      } else { // text
        getRandomFrom( myBot.messages ); // returns "myValue"
        if( myValue == null ){
          myValue = 'visit @botCreator';
        }
        var myBotMessage = '<p>' + myValue + '</p>';
      }

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
                            .html( myBotMessage )
                            .append('<div class="stats"><span class="comments">0</span><span class="likes">0</span></div>');

      if ( !  $( '.feed-post' ).first().hasClass( 'reverse' ) ) {
        myListElement.addClass( 'reverse' );
      }

    /* post creation */

      var loadingTimeout = setTimeout(function() {
        processingPost = false;
        myListElement.append(myProfilePic).append(myBubble).prependTo( feedList ).attr( 'data-botSupporting', myBotSupporting ); //.data( 'data-botSupporting', myBotSupporting )
        jumpBall( myInventoryProfilePic, myProfilePic );
        highlight( myListElement );
        setTimeout( function() {
          myListElement.animate({maxHeight: '100vh', opacity: '1'}, 300, "swing");
        }, 100);

      }, myTime);

    /* post limit error: post leaves feed */

      if ( postCounter >= postLimit ) {
        myListElement.appendTo('main-level');
        myListElement.addClass( 'error' );
        setRandomPosition( myListElement );
      }

    } else {
      alert('newPost failed: No bot data available! // Already processing Post!');
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

  function loadProcessB( myTime, myElement ) {
    var i = 0;
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
        myLoadStatus.html( 'complete' );
        clearInterval( timerID );

        setTimeout( function() { // reset/hide loadBar and loadStatus after short time
          myLoadContainer.animate({opacity: 0}).slideUp();
          myLoadStatus.html( '' );
        }, 500);
      }
    },interval);
  }

  function autoBot( loadCycleTime ){
    console.log('## autoBot ##');

    myTerminalContent.prepend('<p>bot-autopopulation initiated</p>');

    if ( loadCycleTime == null ){
      loadCycleTime = 5000;
    }

    setInterval(function () {
      allCrazySliders();
      allRandomSelect();
      loadBot( loadCycleTime );
    }, loadCycleTime + 2000); // +1000 to have a little break

    setTimeout(function(){
      support2();
    }, 3000);

    /*

    //crazyTime = true; // trigger crazySlider
    allCrazySliders( loadCycleTime );

    */
  }

  function loadBot( myTime ) {
    console.log('## loadBot ##');
    botCounter++; // increase botCounter by 1
    loadProcess( myTime, '.loadBot', newBot );
    $('.inventory-unit').removeClass('hidden');
    botCounterEvents();
  };

  function loadPost( myTime, myBot ) {

    if ( myBot == null ){
      getRandomFrom( myBotsArray ); // returns "myValue"
      var myBot = myValue;
    }

    if ( myTime == null || !myTime > 0 ){
      var myTime = 5000;
    }

    postCounter++; // increase postCounter by 1
    //loadProcess( myTime, '.loadPost', newPost );
    newPost( myTime, myBot );
    $('.feed-unit').removeClass('hidden');  // show the feed, where the post goes
    postCounterEvents(); // triggers post-related events
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

  $( document ).on("click", ".create-bot", function() {
    var myButton = $( this );
    if( !myButton.hasClass( 'clicked' ) ){
      var loadingTime = 3000;
      myButton.addClass( 'clicked' );
      botClicks++; // increase botClicks by 1

      loadBot( loadingTime );

      setTimeout( function() {
        myButton.removeClass( 'clicked' );
        if( botClicks == botLimit ){
          myButton.html('auto-create bots').addClass('auto-create-bot').removeClass('create-bot');
        }
      }, loadingTime + 1000 ); // loadingTime + time to slideUp loading elements
    }
  });

  $( document ).on("click", ".auto-create-bot", function() {
    console.log('clicked auto-create-bot');
    var myButton = $( this );
    if( !myButton.hasClass( 'clicked' ) ){
      autoBot( 4000 );
      myButton.addClass( 'clicked' );
    }
  });

  // CLICK "NEW POST":
  $( document ).on("click", ".profilePic", function() {
    var myButton = $( this );
    if (!myButton.hasClass('clicked') && !myButton.hasClass('user-img')) {
      myButton.addClass( 'clicked' );
      myButton.removeClass( 'shake' ); // from 'jiggle.js'
      $('.profilePic').addClass( 'clicked' ); // disable all profilePics

      console.log('create-post clicked - postCounter: ' + postCounter );
      var loadingTime = 3000;
      var myBotID = myButton.data( 'data-botID' );
      var myBot = myBotsArray[ myBotID ];
      loadPost( loadingTime, myBot );
      setTimeout( function() {
        myButton.removeClass( 'clicked' );
        $('.profilePic').removeClass( 'clicked' ); // re-enable all profilePics
      }, loadingTime + 1000 ); // loadingTime + time to slideUp loading elements
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
      }, 6000);

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
      }, 10000);
    }
  });

});

