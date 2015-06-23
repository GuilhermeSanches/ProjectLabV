/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Index_login = {
    
	inicializar_login: function() {	//inicializa o JS	
		Index_login.setForm_login();        //Setar Formulário
        
	},

    
	setForm_login: function() {
		var form_login = document.login_form;		
		form_login.onsubmit = function() {
            return Index_login.checkSubmit_login(this);
                    
		};
	},
	
	
	checkSubmit_login: function(form_login) {

    form_login = Form.mergeFormItens(form_login);      
        
	$.ajax({			//Função AJAX
			url:"php/Login/verifica_usuario.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_login,	//Dados
   			success: function (sucess){	                
                		if(sucess==1){						
                			location.href='restrita.html';
                        
                		}else if(sucess==7){
                            location.href='restritaAccountDelet.html';
                        }
                
                        else if(sucess==0){
                           document.getElementById('resultLogin').innerHTML = 'Usuário e/ou senha Incoretos!';
                        }
            		}
		});
		
		
		return false;
	},



};
//inicio
document.login_form.entrar.onclick = Index_login.inicializar_login;




