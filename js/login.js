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

  // Inicializamos Firebase
  firebase.initializeApp(config);

  var $txtEmail = $('#email'); 
  var $txtPassword = $('#password');
  var $btnSignup = $('#btn-login');
  var $btnLogGoogle = $('#btn-google');

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatePassword) {
      $btnSignup.removeClass('disabled');
    }
  }

  function desactiveButton() {
    $btnSignup.addClass('disabled');
  } 

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

  var $auth = firebase.auth();
    
  // añadivos evento al signup
  $btnSignup.on('click', function(event) {
    // Obtnemos los valores de los campos
    var $userName = $txtUsername.val();
    var $lastName = $txtLastName.val();
    var $email = $txtEmail.val();
    var $pass = $txtPassword.val();

    var $promise = $auth.signInWithEmailAndPassword($email, $pass);
    $promise.catch(event => alert(event.message));
  });
});