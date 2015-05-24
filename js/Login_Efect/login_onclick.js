$("#login3").live('click', function () {
                
            
                $("#login3").fadeOut(100);
                $("#nav_right_login").hide();
                $("#nav_right_login").fadeIn('slow') ;
                $(".botaoCad").fadeOut(100) ;
}) ;



$("#rec_senha").live('click', function () {
                
            
                $("#nav_right_login").fadeOut(100);
                $("#container_rec_senha").hide();
                $("#container_rec_senha").fadeIn('slow') ;
                $("#form2").css("Display", "block");
                
}) ;



$("#btCad").live('click', function () {
                
            
              
             
                 $('html, body').animate({scrollTop:2070}, 'slow');
               
                 
                
}) ;


    $(document).ready(function() {
       $('#subir').click(function(){ 
          $('html, body').animate({scrollTop:0}, 'slow');
      return false;

         });
     });