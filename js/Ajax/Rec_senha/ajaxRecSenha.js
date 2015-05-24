$(document).ready(function(){	
	$('#senha_rec').click(function(){ 	//Ao submeter formulário
		var email=$('#email').val();
        var recupera=$('#recupera').val();//Pega valor do campo email		
		$.ajax({			//Função AJAX
			url:"php/Recuperar_senha/gerar_nova_senha.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: "email="+email+
                  "&recupera="+recupera,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert('Sua nova senha foi gerada com sucesso e enviada para seu email, por favor, check sua caixa de entrada!');                 
                            window.location.href='index.html';
                		}else if(sucess==2){
                            alert('Voce esqueceu de preencher seu E-mail!');
                        }else if(sucess==3){
                            alert('Este E-mail nao esta cadastrado em nosso banco de dados!');                            
                        }else if(sucess==9){
                            alert('Erro ao enviar email, consulte suporte Tecnico');
                        }else{
                            alert('Erro ao recuperar senha, Erro Desconhecido');
                        }
            		}
		})
		return false;	//Evita que a página seja atualizada
	})
})



