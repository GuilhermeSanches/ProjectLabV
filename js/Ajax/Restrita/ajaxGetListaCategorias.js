var CategoriasControler = {
    inicializar: function() {
                                                    //inicializa o JS	
		CategoriasControler.getData();        //Setar Formulário
	},
        
		
	getData: function() {
             
        $.post('php/Restrita/getCategorias.php', 
           {nome:null},
           CategoriasControler.getDados
        );
				
		return false;
	},
    
    //listar as categorias na tabela
    getDados: function(dados){   
        var categorias = new Array();
        categorias = JSON.parse(dados);        

       
        
        document.getElementById('container').style.display='none'; //esconde container
        
        document.getElementById('listaCategoria').style.display='inline-block';
        
        document.getElementById('listaViagens').style.display='none';
        
        var corpo = document.getElementById("conteudoTabelaCategoria"); //cria um corpo
        
        corpo.innerHTML="";
        
        for (var i=0; i<categorias.length; i++) 
        {
            var row = document.createElement("tr");
                        
            var cellDescricao = document.createElement("td");
            var cellTextDescricao = document.createTextNode(categorias[i].descricao);
            cellDescricao.appendChild(cellTextDescricao);
            row.appendChild(cellDescricao);
                    
            var cellEditar = document.createElement("td");
            cellEditar.innerHTML="<a href='#'><img src='imagens/edit-icon.png' class='edit-icon'></a>";
            row.appendChild(cellEditar);
        
            var cellExcluir = document.createElement("td");
            cellExcluir.innerHTML="<a href='#' onclick=categoriasControler.remove("+categorias[i].id_viagem+")><img src='imagens/remove-icon.png' class='remove-icon'></a>";
            row.appendChild(cellExcluir);            
            corpo.appendChild(row);
            
        }
    },
    
    //remove categoria da tabela
    remove: function(idviagem) {
                
        if(confirm("Deseja realmente remover esta categoria?")){
            
            $.post('php/Restrita/remover_categoria.php', 
               {id_viagem:idviagem},alert("Categoria excluida com sucesso")
            );
            CategoriasControler.getData();			
        }
        return false;
	}
    
};