//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCORDAPofDVCp0h5XwcqvftCLh5fn8vTds",
  authDomain: "kwitter-a2fdc.firebaseapp.com",
  databaseURL: "https://kwitter-a2fdc-default-rtdb.firebaseio.com",
  projectId: "kwitter-a2fdc",
  storageBucket: "kwitter-a2fdc.appspot.com",
  messagingSenderId: "233159844604",
  appId: "1:233159844604:web:d32b998f2554b10755ad79"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
  console.log("Room Name-"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  
  });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
function logout() {
  window.location ="index.html";
}