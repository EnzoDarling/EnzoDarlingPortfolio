$(document).ready(function(){  
  $(window).on('scroll', function(){
    var wn = $(window).scrollTop();
    if( wn > 500){
      $('#navWrapper').addClass('navScrolled');
    } else {
      $('#navWrapper').removeClass('navScrolled');
    }
  });
});