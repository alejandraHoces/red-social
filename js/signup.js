$(document).ready(function() {
  // Initialize Firebase
  var $config = {
    apiKey: 'AIzaSyDazYh5bEK6rNBj1X6VGa1QFuN_wsvUSs4',
    authDomain: 'redsocial-18498.firebaseapp.com',
    databaseURL: 'https://redsocial-18498.firebaseio.com',
    projectId: 'redsocial-18498',
    storageBucket: 'redsocial-18498.appspot.com',
    messagingSenderId: '67249186059'
  };
  firebase.initializeApp($config);

  // Obtener Elementos 
  var $txtUsername = $('#name');
  var $txtLastName = $('#lastname');
  var $txtEmail = $('#email'); 
  var $txtPassword = $('#password');
  var $checkAcepted = $('#filled-in-box');
  var $btnSignup = $('#btn-signup');
  var $btnLogGoogle = $('#btn-google');

  // variable booleanas para la activación del boton 
  var validateUsername = false; 
  var validateLastname = false;
  var validateEmail = false;
  var validatePassword = false;
  var validateChecked = false; 
   
  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateUsername && validateLastname && validateEmail && validatePassword && validateChecked) {
      $btnSignup.removeClass('disabled');
    }
  }

  function desactiveButton() {
    $btnSignup.addClass('disabled');
  } 

  $txtUsername.on('input', function(event) {
    if ($(this).val().length > 2) {
      validateUsername = true;
    }
    // console.log($(this).val().length);
    console.log(validateUsername);
  }); 

  $txtLastName.on('input', function(event) {
    if ($(this).val().length > 2) {
      validateLastname = true;
    }
    // console.log($(this).val().length);
    console.log(validateLastname);
  }); 

  $txtEmail.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    // console.log(REGEXEMAIL.test($(this).val()));
    // console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    };
    // console.log($(this).val().length);
    console.log(validateEmail);
  });

  $txtPassword.on('input', function() {
    // console.log($(this).val());
    if ($(this).val().length >= 6) {
      validatePassword = true;
    }
    // console.log($(this).val().length);
    console.log(validatePassword);
  });

  $checkAcepted.on('click', function(event) {
    // console.log(event.target);
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
    console.log(validateChecked);
  });

  var $auth = firebase.auth();
    
  // añadivos evento al signup
  $btnSignup.on('click', function(event) {
    // Obtnemos los valores de los campos
    var $userName = $txtUsername.val();
    var $lastName = $txtLastName.val();
    var $email = $txtEmail.val();
    var $pass = $txtPassword.val();

    var $promise = $auth.createUserWithEmailAndPassword($email, $pass);
    $promise.catch(event => alert(event.message));

    window.location.href = 'inicio.html';
  });

  $btnLogGoogle.on('click', function(event) {
    var $provider = new firebase.auth.GoogleAuthProvider();
    $provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().getRedirectResult().then(function(result) {
      consolelog(result.user);
      // if (result.credential) {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   var token = result.credential.accessToken;
      //   // ...
      // }
      // // The signed-in user info.
      // var user = result.user;
    })
    // .catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    // $auth.signInWithPopup(provider).then(function(result) {
    //   console.log(result.user);
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  });
});