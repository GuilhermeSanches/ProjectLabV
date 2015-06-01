var Index_get_viagens = {
    inicializar: function() {
                                                    //inicializa o JS	
		Index_get_viagens.getData();        //Setar Formulário
	},
        
		
	getData: function() {
             
	$.post('php/Restrita/getViagens.php', 
           {nome:null},
           Index_get_viagens.getDados
            );
				
		return false;
	},
    
    
    getDados: function(dados){   
        var obj = new Array();
         obj = JSON.parse(dados);  
      
        document.form_gravar.comboViagem.options.length = obj.length;
        for (var i=0; i<obj.length; i++) 
        {document.form_gravar.comboViagem.options[i] = new Option(obj[i].local, obj[i].id_viagem);}

}

};