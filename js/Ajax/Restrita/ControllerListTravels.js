var ViagensControler = {
    inicializar: function() {
                                               
		ViagensControler.getData();                
	},
        		
	getData: function() {
             
        $.post('php/Restrita/getViagens.php', 
           {nome:null},
           ViagensControler.getDados
        );
				
		return false;
	},
    
    //listar dados das viagens na tabela
    getDados: function(dados){   
        var viagens = new Array();
        viagens = JSON.parse(dados);        

        //preparar o HTML
        ServiceTravel.prepareViewTravel(viagens);
       
    }              
};


document.form_restrita_viagens.listarRes.addEventListener('click', function(event) {
	ViagensControler.inicializar();				
			//to avoid page refresh/reload
			event.preventDefault();
		}); 






