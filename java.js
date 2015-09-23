$(document).ready(function(){
  var posters = $('.column').children('li');
  var details = $('.details');
  var navBar = $('.navBar');
  var timer;


  posters.on('mouseenter', function(){
    var self = $(this);

    if(timer) clearTimeout(timer);

    timer = setTimeout(function(){
      $('.active').removeClass('active').fadeOut('normal');

      self.children('.details').addClass('active').fadeIn('slow');
      console.log($(this));
    },750);


  });

  var scroll_pos = 0;

  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 80) {
        navBar.css('background-color','rgba(0,0,0,0.5)');
        navBar.children().css('opacity', 0.5);
      } else {
        navBar.css('background-color','rgba(0,0,0,0.8)');
        navBar.children().css('opacity', 1);
      }
    });

    navBar.on('mouseenter',function(){
      if(timer) clearTimeout(timer);
      $('.active').removeClass('active').fadeOut('normal');
      navBar.css('background-color','rgba(0,0,0,0.8)');
      navBar.children().css('opacity', 1);
    });

    navBar.on('mouseleave',function(){
      var scroll_pos = $(document).scrollTop();
      if(scroll_pos > 80){
        navBar.css('background-color','rgba(0,0,0,0.5)');
        navBar.children().css('opacity', 0.5);
      }
    });

    navBar.bind( 'mousewheel DOMMouseScroll', function(e){
      e.preventDefault();
    });

});
