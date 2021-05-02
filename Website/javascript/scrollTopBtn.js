
    $(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.top-button i').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('.top-button i').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
      $('.top-button i').click(function(){
        $('html').animate({scrollTop:0}, 500);
      });
    });