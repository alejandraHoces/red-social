$(document).ready(function() {
  // nos aseguramos que no se ingresen números en el firstname
  $('#first-name').on('input', function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingrese números');
      $(this).val('');
    } 
  });

  // nos aseguramos que no se ingresen números en el lastname
  $('#last-name').on('input', function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingrese números');
      $(this).val('');
    } 
  });


  // validamos la entrada de correo
  $('#email').focusout(function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var res = PATTERNEMAIL.test($(this).val());
    if (res === false) {
      alert('Ingrese correo válido');
      $(this).val('');
    }
  });

  // validamos que todos los campos esten bien llenados
  $('#submit').click(function(event) {
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      window.location.href = '../views/close.html';
    } else {
      alert('Rellene todos los campos');
      event.preventDefault();
    }
  });
});