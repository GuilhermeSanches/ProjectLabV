var Index_frame = {
    
    abrirFrame: function(){
        document.getElementById('white_content').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }    
};

var Index_frameViagem = {
    
    abrirFrameViagens: function(){
        document.getElementById('frame_viagem').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }    
};

var Index_frameCategoria = {
    
    abrirFrameCategoria: function(){
        document.getElementById('frame_categoria').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }    
};

var Index_frameAlterarViagem = {

    abrirFrameAlterarViagem: function(){
        document.getElementById('frame_alterar_viagem').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }
};

var Index_frameAlterarDespesa = {

    abrirFrameAlterarDespesa: function(){
        document.getElementById('frame_alterar_despesa').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }
};

var Index_frameAlterarCategoria = {

    abrirFrameAlterarCategoria: function(){
        document.getElementById('frame_alterar_categoria').style.display='block';
        document.getElementById('black_overlay').style.display='block';
    }
};


document.form_restrita_viagens.cadViagem.addEventListener('click', function(event) {
	Index_frameViagem.abrirFrameViagens();			
			//to avoid page refresh/reload
			event.preventDefault();
}); 