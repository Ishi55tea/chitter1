
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAfYwHepWOMXPUwFCNVllhD-fCsQ6cKqpE",
      authDomain: "kwitter-3f6c1.firebaseapp.com",
      databaseURL: "https://kwitter-3f6c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f6c1",
      storageBucket: "kwitter-3f6c1.appspot.com",
      messagingSenderId: "645557015189",
      appId: "1:645557015189:web:9a75fbfd1c46b23d5d419c"
    }
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
