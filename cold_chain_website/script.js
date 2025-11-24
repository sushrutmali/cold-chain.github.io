const firebaseConfig = {
  databaseURL: "https://YOUR_DB_URL/"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.database().ref("temperature");

db.on("value", snapshot => {
  const temp = snapshot.val();
  document.getElementById("temperature").innerHTML =
    temp + " °C";
});