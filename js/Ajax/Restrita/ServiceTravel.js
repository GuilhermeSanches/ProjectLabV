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
        }else{     
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
        
        ServiceTravel.setForm_alterar_viagem();
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
	},
    
   //Exibe viagem da tabela que será alterada
    showViagem: function(idviagem) {
        $.ajax({			//Função AJAX
            url:"php/Restrita/getViagemById.php",			//Arquivo php
            type:"POST",				//Método de envio
            data: {id_viagem:idviagem},	//Dados
            dataType: 'json',
            success: function (viagem){			//Sucesso no AJAX
                document.getElementById("alterar_local").value = viagem[0].local;
                document.getElementById("alterar_cidade").value = viagem[0].cidade;
                document.getElementById("alterar_pais").value = viagem[0].pais;
                document.getElementById("alterar_data_partida").value = viagem[0].data_partida;
                document.getElementById("alterar_data_retorno").value = viagem[0].data_retorno;
                document.getElementById("alterar_valorP").value = viagem[0].valor_previsto;
                document.getElementById("alterar_valorL").value = viagem[0].valor_limite;
                document.getElementById("alterar_observacao").value = viagem[0].observacao;
                document.getElementById("alterar_id_viagem").value = viagem[0].id_viagem;
                Index_frameAlterarViagem.abrirFrameAlterarViagem();
            }
		});
        return false;
    },
    
    //ação do submit do formulário alterar categoria
    setForm_alterar_viagem: function() {
		var form_viagem = document.form_alterar_viagem;		
		form_viagem.onsubmit = function() {
            return ServiceTravel.atualizar(this);
                    
		};
	},
	
  
    //atualizar categoria da tabela
    atualizar: function(form_viagem) {
       
        form_viagem = Form.mergeFormItens(form_viagem);      

        $.ajax({			//Função AJAX
		    url:"php/Restrita/alterar_viagem.php",			//Arquivo php
            type:"POST",				//Método de envio
			data: form_viagem,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert("Viagem Alterada com Sucesso");
                            document.getElementById('frame_alterar_viagem').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_alterar_viagem.reset(); //resetar campos do formulário
                            
                            ControllerTravel.inicializar();
                            ViagensControler.inicializar();
                		}else if(sucess==3)
                            alert("Você já tem uma viagem cadastrada");
                        else{
                            alert("Falha ao alterar viagem, repita operação!");
                        }
            		}
		  });
		
		return false;
	}

};