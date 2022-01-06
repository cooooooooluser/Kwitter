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
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!!!!";

function addroom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({ purpose: "adding room name" });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html"

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  //Start code
                 row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";
                 document.getElementById("output").innerHTML += row; 
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
        
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
window.location = "index.html";
}