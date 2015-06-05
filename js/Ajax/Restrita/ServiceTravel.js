var ServiceTravel = {
               
    
    //popular combobox de viagens no frame de lançar despesas
    populateComboTravel: function(obj){
              
        
        document.form_gravar.comboViagem.options.length = obj.length;
        for (var i=0; i<obj.length; i++) 
        document.form_gravar.comboViagem.options[i] = new Option(obj[i].local, obj[i].id_viagem);
},
    
     populateComboTravelRestrita: function(obj){
    if(obj[0].local===''){
        document.form_restrita_viagens.comboViagens.options[0] = new Option("Você ainda nao tem viagem cadastrada", 1);
    }     else{     
        document.form_restrita_viagens.comboViagens.options.length = obj.length;
        for (var i=0; i<obj.length; i++) 
        document.form_restrita_viagens.comboViagens.options[i] = new Option(obj[i].local, obj[i].id_viagem);
    }
},
    
    //preparar os containers do HTML
    prepareViewTravel: function(viagens){
                
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




       

