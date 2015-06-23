var ControllerAccountDeleted = {
    
        init:function(){
            ControllerAccountDeleted.request();
        
        },
    
        request:function(){
         $.ajax({		
			url:"php/Cadastro/desativar_account.php",			
			type:"POST",								
   			success: function (sucess){	                
                		if(sucess==1){	
                            alert("Conta desativada com sucesso, esperamos que volte em breve!")
                			location.href='index.html';}                     
                        else if(sucess==0){
                            alert("Problema ao desativar sua conta, consulte o suporte técnico!");
                        }
            		}
		});
		
		
		return false;
        
        }
        
        


};

document.getElementById('delAccount').addEventListener('click', function(event){
    ControllerAccountDeleted.init();
    event.preventDefault();
});