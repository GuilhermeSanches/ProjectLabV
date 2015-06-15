var Index_get_categorias = {
    inicializar: function() {
                                                    //inicializa o JS	
		Index_get_categorias.getData();        //Setar Formulário
	},
        
		
	getData: function() {
             
	$.post('php/Restrita/getCategorias.php', 
           {nome:null},
           Index_get_categorias.getDados
            );
				
		return false;
	},
    
    
    getDados: function(dados){   
        var obj = new Array();
         obj = JSON.parse(dados);  
      
        document.form_gravar.comboCategoria.options.length = obj.length;
        document.form_alterar_despesa.alterar_comboCategoria.options.length = obj.length;
        for (var i=0; i<obj.length; i++) 
        {
            document.form_gravar.comboCategoria.options[i] = new Option(obj[i].descricao, obj[i].id_categoria);
            document.form_alterar_despesa.alterar_comboCategoria.options[i] = new Option(obj[i].descricao, obj[i].id_categoria);
        }
        
                 
}

};