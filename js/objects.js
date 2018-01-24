/* functions */
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

/* array/object that contains all the bots */
var myArray = [];
var botCounter = 0;

/* first bot */
botCounter++;
myArray.push({
  id: botCounter,
  name:'JohnBot',
  image:'https://upload.wikimedia.org/wikipedia/commons/c/c5/WP_Augustus_John.jpg',
  messages:['hello', 'goodbye'],
  supporting:['#youtube', '#facebook'],
  activity:'70',
  activityDescription:'',
  followers: '123',
  following: '1345'
});

/* second bot */
botCounter++;
myArray.push({
  id: botCounter,
  name:'FridaBot',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/400px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg',
  messages:['hola', 'hasta luego'],
  supporting:['#painting', '#mexico'],
  activity:'20',
  activityDescription:'',
  followers: '1957',
  following: '145'
});

for (i = 0; i < myArray.length; i++) {
  var myBot = myArray[ i ];
  console.log( myBot );

  activityMeasure( myBot );
  getMessages( myBot );
  getSupporting( myBot );

  $( '<div></div>' ).appendTo( 'body' ).addClass( 'stats' )
    .html(
      '<img src=' + myBot.image + '><br>' +
      'ID: ' + myBot.id + '<br>' +
      'Name: ' + myBot.name + '<br>' +
      'Messages: ' + messages + '<br>' +
      'Supporting: ' + supporting + '<br>' +
      'Activity: ' + myBot.activityDescription + '<br>' +
      'Followers: ' + myBot.followers + '<br>' +
      'Following: ' + myBot.following + '<br>'
    );
}