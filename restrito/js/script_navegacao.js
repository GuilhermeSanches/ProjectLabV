$(document).ready(function(){
		var content = $('#content');
 
		//pre carregando o gif
		//loading = new Image(); loading.src = 'loading.gif';
		$('#navmenu').on('click', 'a', function( e ){
			e.preventDefault();
			//content.html( '<img src="loading.gif" />' );
 
			var href = $( this ).attr('href');
			$.ajax({
				url: href,
				success: function( response ){
					//forçando o parser
					var data = $( '<div>'+response+'</div>' ).find('#content').html();
 
					//apenas atrasando a troca, para mostrarmos o loading
					//window.setTimeout( function(){
						//content.fadeOut('slow', function(){
							content.html( data ).fadeIn();
						//});
					//}, 500 );
				}
			});
 
		});
	});
