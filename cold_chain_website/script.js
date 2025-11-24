const firebaseConfig = {
  databaseURL: "https://coldchain-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.database().ref("temperature");

db.on("value", snapshot => {
  const temp = snapshot.val();
  document.getElementById("temperature").innerHTML =
    temp + " °C";
});
