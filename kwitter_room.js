//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCPCzGn3mrS66rFuU8vWDe-88_lIYzWSLs",
  authDomain: "medical-app-8d8fb.firebaseapp.com",
  databaseURL: "https://medical-app-8d8fb-default-rtdb.firebaseio.com",
  projectId: "medical-app-8d8fb",
  storageBucket: "medical-app-8d8fb.appspot.com",
  messagingSenderId: "1039162411016",
  appId: "1:1039162411016:web:8ce43dd9cd7f04e1b969bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }