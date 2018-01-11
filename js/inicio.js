
$(document).ready(function () {
  // INCIALIZAMOS EL MENU HAMBURGUESA
  $('.button-collapse').sideNav();

  var $textArea1 = $('#textarea1');
  var $btnPost = $('#btnPost');
  var $board = $('#board');
  var $btnImage = $('#btnImage');
  var $file = $('#file');

  // Evento para poder postear texto

  $btnPost.on('click', function() {
    var $text = $textArea1.val();
    $($board).prepend('<form class=\'col s12\'><div class=\'row\'><div class=\'col s2\'><img src=\'../assets/images/user.jpg\' class=\'circle responsive-img\'></div><div class=\'col s10\'><p>' + $text + '</p></div></div></form>');
  });

  $btnImage.on('click', function() {
    var photo= $('#urlInput').val();
    /** Vaciando los input. */
    $('#urlInput').val('');
    /** Contenedor donde irán los nuevos comentarios. */
    var contenedor= $('#board');
    /*var $path = $file.val();
    var $image = $path.substring($path.lastIndexOf('\\') + 1, $path.length);
    console.log($image);*/
    contenedor.append('<div class=box><div> <img class="photobox center-block" src= ' + photo + '  alt=...> </div></div>');
  });
});
