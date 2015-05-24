var Sessao_checked = {
    init: function(){
           $.post('php/Restrita/functions.php', 
           {nome:null},
           Sessao_checked.validateReturn
            );
				
		return false;
    
    },
    
    validateReturn: function(returno){
            if(returno!=1){               
            location.href='index.html';
        }
    }


};

window.onload = Sessao_checked.init;