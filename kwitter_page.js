var firebaseConfig = {
      apiKey: "AIzaSyA2cQWB5l7BmSI8s6ms4-6MvGNvpK7yyT8",
      authDomain: "bkmkkkkkk.firebaseapp.com",
      databaseURL: "https://bkmkkkkkk-default-rtdb.firebaseio.com",
      projectId: "bkmkkkkkk",
      storageBucket: "bkmkkkkkk.appspot.com",
      messagingSenderId: "917624993337",
      appId: "1:917624993337:web:15311f591ca650bd363fe8",
      measurementId: "G-F2M29GL2FD"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);





//YOUR FIREBASE LINKS


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0  
      });

      document.getElementById("msg").value = "";
}