var ControllerTravel = {
    inicializar: function() {
                                                   
		ControllerTravel.openRequest();        
	},
        
		
	openRequest: function() {
             
	$.post('php/Restrita/getViagens.php', 
           {key:null},
            ControllerTravel.getDados
            );
				
		return false;
	},
    
    
     getDados: function(dados){
         var obj = new Array();
         obj = JSON.parse(dados);  
         ServiceTravel.populateComboTravel(obj);
        
    }
    
    
   

};