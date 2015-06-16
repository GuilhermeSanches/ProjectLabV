/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Index_cadastrar = {

	inicializar: function() {	//inicializa o JS	
		Index_cadastrar.setForm();        //Setar Formulário
	},


	setForm: function() {
		var form = document.cadastro;
		
		form.onsubmit = function() {
            return Index_cadastrar.checkSubmit(this);
                    
		};
	},
	
	
	checkSubmit: function(form) {

    form = Form.mergeFormItens(form);    
        
        
	$.ajax({			                      //Função AJAX
			url:"php/Cadastro/cadastrar.php", //Arquivo php
			type:"POST",			      	  //Método de envio
			data:form,                        //Dados
   			success: function (sucess){		  //Sucesso no AJAX
                		if(sucess==1){						
                			alert('Cadastro feito com sucesso. Verifique sua caixa de entrada e confirme seu cadastro');
                            window.location.href='index.html';
                            
                        
                		}else if(sucess==2){
                            alert('Preencha todos os campos');                            
                        }else if(sucess==3){
                            alert('Esse email ja esta sendo usado por outro usuario!');                            
                        }else if(sucess==4){
                            alert('Esse nome de usuario ja existe');                            
                        }else {
                              alert('Usuario ou email ja cadastrado');    
                        }
            		}
		});
		
		
		return false;
	},



};
//inicio
window.onload = Index_cadastrar.inicializar;
