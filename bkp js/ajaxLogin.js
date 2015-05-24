$(document).ready(function(){	
	$('#btnEntrar').click(function(){ 	//Ao submeter formulário
		var usuario=$('#usuario').val();	//Pega valor do campo email
		var senha=$('#senha').val();	//Pega valor do campo senha
		$.ajax({			//Função AJAX
			url:"verifica_usuario.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: "usuario="+usuario+"&senha="+senha,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			location.href='restrita.html';
                        
                		}else{
                            alert("Login e/ou Senha Incorretos!");
                        }
            		}
		})
		return false;	//Evita que a página seja atualizada
	})
})



