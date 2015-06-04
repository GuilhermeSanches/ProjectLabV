var ServiceTravel = {
               
    
    //popular combobox de viagens no frame de lançar despesas
    populateComboTravel: function(obj){
              
        document.form_gravar.comboViagem.options.length = obj.length;
        for (var i=0; i<obj.length; i++) 
        document.form_gravar.comboViagem.options[i] = new Option(obj[i].local, obj[i].id_viagem);
},
    
    //preparar os containers do HTML
    prepareViewTravel: function(viagens){
          document.getElementById('conteudo_resumo').style.display='none'; //esconde conteudo resumo        
          document.getElementById('container').style.display='none'; //esconde container        
          document.getElementById('listaViagens').style.display='inline-block';        
          document.getElementById('listaCategoria').style.display='none';
        
        var corpo = document.getElementById("conteudoTabelaViagens"); //cria um corpo
        
        corpo.innerHTML="";    
        
        //criar campos necessarios no html
       Service_html.createFields(viagens, corpo);                      
    },
    
    
        //remover viagem da lista
      remove: function(idviagem) {
                
        if(confirm("Deseja realmente remover esta viagem?")){
            
            $.post('php/Restrita/remover_viagem.php', 
               {id_viagem:idviagem},alert("Viagem excluida com sucesso")
            );
            ViagensControler.getData();			
        }
        return false;
	}
    
    

};




       

