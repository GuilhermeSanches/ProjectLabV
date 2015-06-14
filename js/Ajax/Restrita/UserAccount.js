var UserAccount = {

    init:function(){
        
        if(document.getElementById('relatorio')){
        document.getElementById('relatorio').style.display='none';        
        document.getElementById('container').style.display='none';
        document.getElementById('listaCategoria').style.display='none';
        document.getElementById('detalhesViagens').style.display='none';
        document.getElementById('listaViagens').style.display='none';                                
        document.getElementById('configuracao_usuario').style.display='inline';
        }
        
        if(document.getElementById('restrita')){
        document.getElementById('restrita').style.display='none';
        document.getElementById('resumo').style.display='none';
        document.getElementById('container').style.display='none';
        document.getElementById('listaCategoria').style.display='none';
        document.getElementById('detalhesViagens').style.display='none';
        document.getElementById('listaViagens').style.display='none';
        document.getElementById('configuracao_usuario').style.display='inline';
            
       
            
        }
        UserAccount.getDadosUser();
        UserAccount.addListener();
    
    },
    addListener:function(){
        document.user_account.addEventListener('submit', function(event) {			                                      
            UserAccount.saveDados();            
            
            event.preventDefault();			
		});
    
    },
    
    saveDados:function(){
        var form = document.user_account;
        
         form = Form.mergeFormItens(form);      
        
	$.ajax({			                      //Função AJAX
			url:"php/Cadastro/updateCadastro.php", //Arquivo php
			type:"POST",			      	  //Método de envio
			data:form,                        //Dados
   			success: function (sucess){		  //Sucesso no AJAX
                		if(sucess==1){						
                			alert('Cadastro alterado com sucesso.');
                            window.location.href='restrita.html';                                                    
                		}else if(sucess==2){
                            alert('Preencha todos os campos');                            
                        }else if(sucess==4){
                            alert("Já existe este nome de usuario");
                        }else if(sucess==3){
                            alert("Este email ja esta sendo usado por outro usuario");
                        }else{
                            alert("erro");                        
                            }
            		}
		});
		
		
		return false;
    
    },
    
    
    getDadosUser:function(){
        
        
        $.post('php/Restrita/getDadosUser.php', 
           {dadoss:null},
           UserAccount.setDados
            );
				
		return false;
    
    },
    
    setDados:function(dados){
        
     dados = JSON.parse(dados);
        
        document.user_account.nome.value = dados[0].nome;
        document.user_account.sobrenome.value = dados[0].sobrenome;
        document.user_account.email.value = dados[0].email;
        document.user_account.usuario.value = dados[0].usuario;
        document.user_account.idade.value = dados[0].idade;
        document.user_account.info.value = dados[0].informacao;
    }
    

};

$(document).ready(function() {
    $('#user_account').click(function(){ 
	UserAccount.init();})
});