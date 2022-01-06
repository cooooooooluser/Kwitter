//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBbn-V7HqV2Dvb0Rt-R6vGXMX2hYAMj3sE",
      authDomain: "kwitter-fb5ed.firebaseapp.com",
      databaseURL: "https://kwitter-fb5ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb5ed",
      storageBucket: "kwitter-fb5ed.appspot.com",
      messagingSenderId: "140902236121",
      appId: "1:140902236121:web:779d9b9eb7e81d0b9263c8",
      measurementId: "G-MSK3W2N3J2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");
function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0

      });
      document.getElementById("message").value = " ";
}  

//function getData() {
  //    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    //        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      //            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        //                firebase_message_id = childKey;
          //              message_data = childData;
                        //Start code

                        //End code
            //      }
            //});
     // });
//}
//||\\getData();

