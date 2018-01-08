$(document).ready(function() {
  // para cambiar las banderas
  function bandera(element) {
    var srcFlags = $('#image-flags').attr('src');
    var altFlags = $('#image-flags').attr('alt');
    var thisFlags = $(element).attr('src');
    var thisAltImageFlags = $(element).attr('alt');
    $('#image-flags').attr('src', thisFlags);
    $('#image-flags').attr('alt', thisAltImageFlags);
    $(element).attr('src', srcFlags);
    $(element).attr('alt', altFlags);
    if (thisAltImageFlags === 'mexico') {
      $('#postal').text('52');
      localStorage.codPostal = '52';
    }
    if (thisAltImageFlags === 'colombia') {
      $('#postal').text('50');
      localStorage.codPostal = '50';
    }
    if (thisAltImageFlags === 'peru') {
      $('#postal').text('51');
      localStorage.codPostal = '51';
    }
    if (thisAltImageFlags === 'eu') {
      $('#postal').text('49');
      localStorage.codPostal = '49';
    }  
  }

  $('#image-flags-1').click(function() {
    bandera($('#image-flags-1'));
  });

  $('#image-flags-2').click(function() {
    bandera($('#image-flags-2'));    
  });

  $('#image-flags-3').click(function() {
    bandera($('#image-flags-3'));    
  });

  // si se ingresan 9 digitos se activara en boton
  $('#number-phone').keyup(function() {
    if (($(this).val().length) === 9) {
      $('#button-next').removeAttr('disabled');
      $('#button-next').removeClass('disabled-color');
      $('#button-next').addClass('enabled-color');
    } else {
      $('#button-next').attr('disabled', 'disabled');
      $('#button-next').addClass('disabled-color');
      $('#button-next').removeClass('enabled-color');
    }
  });
  
  // guardamos en el local storage después del evento click cuando se activa el evento click se creara el codigo y se guardara en localStorage para validarlo en la otra vista
  $('#button-next').click(function() {
    // creamos números random
    var numRandomOne = (Math.floor((Math.random() * 10))).toString();
    var numRandomTwo = (Math.floor((Math.random() * 10))).toString();
    var numRandomThree = (Math.floor((Math.random() * 10))).toString();
    alert('LAB - ' + numRandomNew + numRandomTwo + numRandomThree);
    localStorage.numRam = numRandomOne;
    localStorage.numRam1 = numRandomTwo;
    localStorage.numRam2 = numRandomThree;
    window.location.href = '../views/verify.html';
  });
});
