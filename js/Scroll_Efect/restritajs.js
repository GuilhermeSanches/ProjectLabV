



$(document).ready(function () {
    var topo = $('#nav').height(); // altura do topo    
    var scrollTop = $(window).scrollTop(); // qto foi rolado a barra
    var tamPagina = $(document).height(); // altura da página    
    var ultimoScroll = 0;
    
 
  
$("#nav").css('position', 'fixed');
    $("#nav").css('z-index', '1001');
            $("#nav").css('position', 'fixed');
            $("#nav").css('left', '0');            
            $("#menu_lateral").css('position', 'fixed');
    $(document).scroll(function () {
        scrollTop = $(this).scrollTop();
            $("#nav").css('z-index', '1001');
            $("#nav").css('position', 'fixed');
            $("#nav").css('left', '0');            
            $("#menu_lateral").css('position', 'fixed');

        if (scrollTop > 50) {
            $("#nav").css('z-index', '999');
            $("#nav").css('position', 'fixed');
            $("#nav").css('left', '0');            
            $("#nav").css('margin-top', '-50px');
            $("#menu_lateral").css('position', 'fixed'); 
             $("#menu_lateral").css('margin-top', '150px');

            if (scrollTop < ultimoScroll) {
                $("#nav").css('top', '50px');                
                $("#nav").css('left', '0');                                           
                $("#nav").css('width', '100%');
                 $("#nav").css('z-index', '1000');
                $("#menu_lateral").css('top', '10%');    
                $("#menu_lateral").css('position', 'fixed');


            } else {
                $("#nav").css('top', '0px');                
                $("#nav").css('transition', ' all .515s ease-in-out');  
                $("#menu_lateral").css('position', 'fixed');
                $("#menu_lateral").css('top', '10px');
                
            }
            ultimoScroll = scrollTop;
        }
        




    
        
        
    }
     );
});