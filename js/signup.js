$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDazYh5bEK6rNBj1X6VGa1QFuN_wsvUSs4',
    authDomain: 'redsocial-18498.firebaseapp.com',
    databaseURL: 'https://redsocial-18498.firebaseio.com',
    projectId: 'redsocial-18498',
    storageBucket: 'redsocial-18498.appspot.com',
    messagingSenderId: '67249186059'
  };
  firebase.initializeApp(config);
    
  var bigOne = document.getElementById('bigOne');
  var dbRef = firebase.database().ref().child('text');
  // dbRef.on('value', snap => bigOne.innerText = snap.val());
});