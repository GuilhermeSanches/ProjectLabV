var Index_gravar_categoria = {
    
	init_gravar_categoria: function() {	//inicializa o JS	        
		Index_gravar_categoria.setForm_gravar_categoria();        //Setar Formulário
        
	},

    
	setForm_gravar_categoria: function() {
		var form_categoria = document.form_categoria;		
		form_categoria.onsubmit = function() {
            return Index_gravar_categoria.checkSubmit_gravar_categoria(this);
                    
		};
	},
	
	
	checkSubmit_gravar_categoria: function(form_categoria) {        
    form_categoria = Form.mergeFormItens(form_categoria);      
        
	$.ajax({			//Função AJAX
			url:"php/Restrita/gravar_categoria.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_categoria,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert("Categoria Gravada com Sucesso");
                            document.getElementById('frame_categoria').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_categoria.reset(); //resetar campos do formulário
                            document.reload;
                            
                		}else if(sucess==3)
                            alert("Você já tem uma categoria cadastrada");
                        else{
                            alert("Falha ao gravar, repita operação!");
                        }
            		}
		});
		
		
		return false;
	},



};
//inicio
$(document).ready(function() {
    $('#gravar_categoria').click(function(){ 
	Index_gravar_categoria.init_gravar_categoria();})
});




