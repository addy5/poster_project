$(document).ready(function(){
  var posters = $('.column').children('li');
  var details = $('.details');


  posters.on('mouseenter', function(){

    $('.active').removeClass('active').fadeOut('normal');

    $(this).children('.details').addClass('active').fadeIn('slow');




  });



});
