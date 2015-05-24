$(document).ready(function(){      
	$('#cadastrar').click(function(){ 	//Ao submeter formulário
		var nome=$('#nome').val();	//Pega valor do campo email
		var sobrenome=$('#sobrenome').val();
        var email=$('#email2').val();	//Pega valor do campo email
		var user=$('#user').val();
        var pass=$('#pass').val();	//Pega valor do campo email
		var pass2=$('#pass2').val();
        var info=$('#info').val();//Pega valor do campo senha
		$.ajax({			//Função AJAX
			url:"cadastrar.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: "nome="+nome+                          
                  "&sobrenome="+sobrenome+
                  "&email="+email+
                  "&user="+user+
                  "&pass="+pass+
                  "&pass2="+pass2+
                  "&info="+info,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
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
		})
		return false;	//Evita que a página seja atualizada
	})
})



