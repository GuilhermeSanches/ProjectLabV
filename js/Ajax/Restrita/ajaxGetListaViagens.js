var ViagensControler = {
    inicializar: function() {
                                                    //inicializa o JS	
		ViagensControler.getData();        //Setar Formulário
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

        document.getElementById('conteudo_resumo').style.display='none'; //esconde conteudo resumo
        
        document.getElementById('container').style.display='none'; //esconde container
        
        document.getElementById('listaViagens').style.display='inline-block';
        
        var corpo = document.getElementById("conteudoTabelaViagens"); //cria um corpo
        
        corpo.innerHTML="";
        
        for (var i=0; i<viagens.length; i++) 
        {
            var row = document.createElement("tr");
                        
            var cellLocal = document.createElement("td");
            var cellTextLocal = document.createTextNode(viagens[i].local);
            cellLocal.appendChild(cellTextLocal);
            row.appendChild(cellLocal);
            
            var cellPartida = document.createElement("td");
            var cellTextPartida = document.createTextNode(viagens[i].partida);
            cellPartida.appendChild(cellTextPartida);
            row.appendChild(cellPartida);
            
            var cellRetorno = document.createElement("td");
            var cellTextRetorno = document.createTextNode(viagens[i].retorno);
            cellRetorno.appendChild(cellTextRetorno);
            row.appendChild(cellRetorno);
            
            var cellTotal = document.createElement("td");
            
            if((viagens[i].total)== null){
                var total = 0;
            }else{
                total = viagens[i].total;
            }
            var cellTextTotal = document.createTextNode(total);
            cellTotal.appendChild(cellTextTotal);
            row.appendChild(cellTotal);
            
            var cellEditar = document.createElement("td");
            cellEditar.innerHTML="<a href='#'><img src='imagens/edit-icon.png' class='edit-icon'></a>";
            row.appendChild(cellEditar);
        
            var cellExcluir = document.createElement("td");
            cellExcluir.innerHTML="<a href='#' onclick=ViagensControler.remove("+viagens[i].id_viagem+")><img src='imagens/remove-icon.png' class='remove-icon'></a>";
            row.appendChild(cellExcluir);            
            corpo.appendChild(row);
            
        }
    },
    
    //remover viagem da tabela
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




