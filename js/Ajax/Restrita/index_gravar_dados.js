/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Index_gravar = {
    
	init_gravar: function() {	//inicializa o JS	        
		Index_gravar.setForm_gravar();        //Setar Formulário
        
	},

    
	setForm_gravar: function() {
		var form_gravar = document.form_gravar;		
		form_gravar.onsubmit = function() {
            var results   = ControllerIsNumber.isNumber(this.valor);
            
            if(results==1){           
            return Index_gravar.checkSubmit_gravar(this);
            }
            else{
            alert("Os campos de valores devem ser Numéricos!");              
            }                    
            
            
                    
		};
	},
	
	
	checkSubmit_gravar: function(form_gravar) {

    form_gravar = Form.mergeFormItens(form_gravar);      
        
	$.ajax({			//Função AJAX
			url:"php/Restrita/gravar_dados.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_gravar,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert("Dados Gravados com Sucesso");
                            document.getElementById('white_content').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_gravar.reset();
                            
                		}else if(sucess==3)
                            alert("Você ainda nao tem nenhuma viagem cadastrada");                        
                        else
                            alert(sucess);
            		}
		});
		
		
		return false;
	},



};
//inicio
$(document).ready(function() {
    $('#gravar').click(function(){ 
	Index_gravar.init_gravar();})
});




