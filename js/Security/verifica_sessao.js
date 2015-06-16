var Sessao_checked = {
    
    init: function(){
        
           $.post('php/Restrita/functions.php', 
           {nome:null},
           Sessao_checked.validateReturn
            );
				
		return false;
    
    },
    
    validateReturn: function(returno){
            if(returno==0){               
            location.href='index.html';
        }else{
            document.getElementById('welcomeUser').innerHTML = 'Bem vindo '+returno;
        }
    }


};

window.onload = Sessao_checked.init;