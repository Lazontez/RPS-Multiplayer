
var firebaseConfig = {
  apiKey: "AIzaSyC0qZXLssErplqt7nipJCmGriho7-uVGZg",
  authDomain: "tuth-e5a74.firebaseapp.com",
  databaseURL: "https://tuth-e5a74.firebaseio.com",
  projectId: "tuth-e5a74",
  storageBucket: "tuth-e5a74.appspot.com",
  messagingSenderId: "451064224321",
  appId: "1:451064224321:web:0522546a37f991d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


//puts the players wins,losses,and name into an object
var playerInfo = {
  playerName: name,
  wins: 0,
  losses: 0,
}
database.ref().push(playerInfo)
// make a variable to get referance from firebase for connections
var connectionsRef = database.ref("/connections");
// make variable that gets a referance from firbase for the connected
var connectedRef = database.ref(".info/connected");
// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {
    
    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snapshot) {
  // The number of online users is the number of children in the connections list.
  var usersConnected = snapshot.numChildren();
  console.log("Users connected "+usersConnected);
  if(usersConnected===1){
    console.log("You Suck")
    alert("Waiting for other player.")
  }
  else if(usersConnected===2){
    console.log("Bitch Boy")
    $(".startGame").hide()
    $("#mainGame").show()
  }
  var user1name= snapshot.orderBy("Child");
  console.log(user1name)
});

var user1name;
var user2;
var userName;
//Set the name stored in firebase as the text for the usersnames
database.ref().on("child_added", function(snapshot) {
console.log(snapshot.val().playerName)

})


//Put the wins count on the html

//add a boolean statement that sees if each button has a class 
//of the given value in order to judge which button was chosen
$(".gameBtn").on("click", function(){
  console.log(userPicked)
})


function getUsersChoice(){}
function compareUsersChoices(){}
function declareWinner(){}


