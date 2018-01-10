$(document).ready(function() {
  // INCIALIZAMOS EL MENU HAMBURGUESA
  $('.button-collapse').sideNav();

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDazYh5bEK6rNBj1X6VGa1QFuN_wsvUSs4',
    authDomain: 'redsocial-18498.firebaseapp.com',
    databaseURL: 'https://redsocial-18498.firebaseio.com',
    projectId: 'redsocial-18498',
    storageBucket: 'redsocial-18498.appspot.com',
    messagingSenderId: '67249186059'
  };

  // Inicializamos Firebase
  firebase.initializeApp(config);


  // capturamos el boton para subir imagen de perfil
  var $btnProfile = $('#btn-perfil');
  var $imgProfile = $('#img-profile');
  
  var $uploader = 0;
  
  $btnProfile.on('change', function(event) {

    // Obtener el archivo
    var $file = event.target.files[0];
  

    // creamos una storage ref
    var $storageRef = firebase.storage().ref('profile_photo/' + $file.name);

    $imgProfile.removeAttr('src');
    $imgProfile.attr('src', firebase.storage().ref('profile_photo/' + $file.name));


    // subir archivo
    var $task = $storageRef.put($file);

    $task.on('state_changed', 
      function progress(snapshot) {
        var $percentage = (snapshot.bytesTransferred / snapshot.totalButes) * 100;
        $uploader = $percentage;
        console.log($uploader);
      },

      function error(err) {

      },

      function complete() {

      });

  });

});  