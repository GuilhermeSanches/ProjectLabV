var AccountReativeControll = {

        init:function(){
                        
            AccountReativeControll.request();
        
        },
        
        request:function(){
                    
        $.ajax({		
			url:"php/Cadastro/reativar_account.php",			
			type:"POST",								
   			success: function (sucess){	                
                		if(sucess==1){	
                            alert("Conta reativada com sucesso, faça login novamente!")
                			location.href='index.html';}                     
                        else if(sucess==0){
                            alert("Problema ao reativar sua conta, consulte o suporte técnico!");
                        }
            		}
		});
		
		
		return false;
        
        }

};

document.getElementById('reativar').addEventListener('click',function(event){
    AccountReativeControll.init();
    
    event.preventDefault();

});