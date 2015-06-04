/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Index_gravar_viagem = {
    
	init_gravar_viagem: function() {	//inicializa o JS	        
		Index_gravar_viagem.setForm_gravar_viagem();        //Setar Formulário
        
	},

    
	setForm_gravar_viagem: function() {
		var form_viagem = document.form_viagem;		
		form_viagem.onsubmit = function() {
            return Index_gravar_viagem.checkSubmit_gravar_viagem(this);
                    
		};
	},
	
	
	checkSubmit_gravar_viagem: function(form_viagem) {        
    form_viagem = Form.mergeFormItens(form_viagem);      
        
	$.ajax({			//Função AJAX
			url:"php/Restrita/gravar_viagem.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_viagem,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert("Viagem Gravada com Sucesso");
                            document.getElementById('frame_viagem').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_viagem.reset(); //resetar campos do formulário
                            document.reload;
                            
                		}else if(sucess==2)
                            alert("Você já tem uma viagem cadastrada neste intervalo de datas");
                        else{
                            alert("Falha ao gravar, repita operação!teste");
                        }
            		}
		});
		
		
		return false;
	},



};
//inicio
$(document).ready(function() {
    $('#gravar_viagem').click(function(){ 
	Index_gravar_viagem.init_gravar_viagem();})
});




