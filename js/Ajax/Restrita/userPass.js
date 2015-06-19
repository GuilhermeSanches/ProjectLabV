var ControllerPass = {

    init:function(){
        var form = document.form_senha_alter;
 
        form.addEventListener('submit', function(event){
            
    var results = COntrollerValidPass.validacaoPassUser(form);        
            
            if(results==1){
       ControllerPass.comparePassAtual();
            form.reset();
            }
            else 
                alert("As senhas nao conferem");
        event.preventDefault();
        });
      
       
      
        
        
    },
    
    comparePassAtual: function(){
                  
        
         var form = document.form_senha_alter;
        form = Form.mergeFormItens(form);    
        
       	$.ajax({			                      //Função AJAX
			url:"php/Restrita/getSenhaAtual.php", //Arquivo php
			type:"POST",			      	  //Método de envio
			data:form,                        //Dados
   			success: function (sucess){		  //Sucesso no AJAX
                		if(sucess==1){						
                			alert('Senha alterada com sucesso.');                               
                        }else if(sucess==0){
                            alert('Sua Senha Atual não confere');                            
                        }
            		}
		});
		
		
		return false;
        
    },
    
    setDados: function(dados){
    alert("deu");
        
    }
    
};

window.onload = ControllerPass.init();