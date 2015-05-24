


$(document).ready(function () {
  
    var scrollTop = $(window).scrollTop(); // qto foi rolado a barra
          
    
    
    $(".body-1").css('width', '100%');
    $(".body-1").css('left', '0');

    $(document).scroll(function () {
        scrollTop = $(this).scrollTop();
         
        if (scrollTop > 529) {
            $(".body-1").css('transition', 'none');
            $(".body-1").css('top', '0px');
            $(".body-1").css('position', 'fixed');                        
            $(".body-2").css('z-index', '1001');
                                             
         
        }
        
        else {
                if((scrollTop < 529) ){
            $(".body-1").css('transition', 'none');
            $(".body-1").css('top', '529px');
            $(".body-1").css('position', 'absolute');                        
            $(".body-2").css('z-index', '1000');
                }
                        
        }
        
          if (scrollTop > 1018) {
            $(".body-2").css('transition', 'none');
            $(".body-2").css('top', '0px');
            $(".body-2").css('position', 'fixed');                        
            $(".body-3").css('z-index', '1002');
                                             
         
        }
        
        else {
                if((scrollTop < 1018) ){
            $(".body-2").css('transition', 'none');
            $(".body-2").css('top', '1018px');
            $(".body-2").css('position', 'absolute');                        
            $(".body-3").css('z-index', '1001');
                }
                        
        }
        
        if (scrollTop > 1488) {
            $(".body-3").css('transition', 'none');
            $(".body-3").css('top', '0px');
            $(".body-3").css('position', 'fixed');                        
            $(".body-4").css('z-index', '1003');
                                             
         
        }
        
        else {
                if((scrollTop < 1488) ){
            $(".body-3").css('transition', 'none');
            $(".body-3").css('top', '1488px');
            $(".body-3").css('position', 'absolute');                        
            $(".body-4").css('z-index', '1002');
                }
                        
        }
        
        
    }
     );
});