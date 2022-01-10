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
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0,
            dislike:0
      });
      document.getElementById("message").value = " ";
}  

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                 childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                          name=message_data['name'];
                          message=message_data['message'];
                          like=message_data['like'];
                          dislike=message_data['dislike'];
                          nametag="<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>";
                          messagetag="<p>  " + message + "</p>";
                          liketag="<button class='btn btn-warning' id=" + firebase_message_id + " value= " + like + " onclick='updatelike(this.id)'> ";
                          spantag1="<span class='glyphicon glyphicon-thumbs-up'> LIKES: " + like + "</span> </button> ";
                          disliketag="<button class='btn btn-warning' id=" + firebase_message_id + " value= " + dislike + " onclick='updatedislike(this.id)'> ";
                          spantag2="<span class='glyphicon glyphicon-thumbs-down'> Dislikes: " + dislike + "</span> </button> <hr>";
                          row= nametag + messagetag + liketag + spantag1 + disliketag + spantag2;
                          document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function goback() {
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
window.location = "index.html";
}

function updatelike(message_id) {
    likes=document.getElementById(message_id).value;
    updatedlikes= Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
          like: updatedlikes
    });
}

function updatedislike(message_id) {
      dislike=document.getElementById(message_id).value;
      updateddislike= Number(dislike) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            dislike: updateddislike
      });
  }

