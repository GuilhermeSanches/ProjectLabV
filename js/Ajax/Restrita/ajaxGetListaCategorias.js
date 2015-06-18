var CategoriasControler = {
    inicializar: function() {
                                                    //inicializa o JS	
		CategoriasControler.getData();        //Setar Formulário
        CategoriasControler.setForm_alterar_categoria();
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
        
        document.getElementById('configuracao_usuario').style.display='none';
        
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
            
            if((categorias[i].id_usuario==0) || (categorias[i].id_usuario==null)){
                cellEditar.innerHTML="<img src='imagens/disable-edit-icon.png' class='edit-icon' />";          
            }else{
                cellEditar.innerHTML="<a href='#' onclick=CategoriasControler.showCategoria("+categorias[i].id_categoria+")><img src='imagens/edit-icon.png' class='edit-icon'></a>";
            }
            row.appendChild(cellEditar);
        
            var cellExcluir = document.createElement("td");
            
            if((categorias[i].id_usuario==0) || (categorias[i].id_usuario==null)){
                cellExcluir.innerHTML="<img src='imagens/disable-remove-icon.png' class='remove-icon' />";
            }else{
                cellExcluir.innerHTML="<a href='#' onclick=CategoriasControler.remove("+categorias[i].id_categoria+")><img src='imagens/remove-icon.png' class='remove-icon'></a>";
            }
            row.appendChild(cellExcluir);            
            corpo.appendChild(row);
            
        }
    },
    
    //remover categoria da tabela
    remove: function(idcategoria) {
                
        if(confirm("Deseja realmente remover esta categoria?")){
            
            $.post('php/Restrita/remover_categoria.php', 
               {id_categoria:idcategoria},
                function(retorno){
                if(retorno==1){
                alert("Categoria excluida com sucesso");}
                    else if(retorno==0){alert("Você nao pode excluir esta categoria pois existem lançamentos efetuados nela");}}
            );
            CategoriasControler.getData();			
        }
        return false;
	},
    
    //Exibe categoria da tabela que será alterada
    showCategoria: function(idcategoria) {
        $.ajax({			//Função AJAX
            url:"php/Restrita/getCategoriaById.php",			//Arquivo php
            type:"POST",				//Método de envio
            data: {id_categoria:idcategoria},	//Dados
            dataType: 'json',
            success: function (categoria){			//Sucesso no AJAX
                document.getElementById("alterar_descricao").value = categoria[0].descricao;
                document.getElementById("alterar_id_categoria").value = categoria[0].id_categoria;
                Index_frameAlterarCategoria.abrirFrameAlterarCategoria();
            }
		});
        return false;
    },
    
    //ação do submit do formulário alterar categoria
    setForm_alterar_categoria: function() {
		var form_categoria = document.form_alterar_categoria;		
		form_categoria.onsubmit = function() {
            return CategoriasControler.atualizar(this);
                    
		};
	},
	
  
    //atualizar categoria da tabela
    atualizar: function(form_categoria) {
       form_categoria = Form.mergeFormItens(form_categoria);      
	   $.ajax({			//Função AJAX
			url:"php/Restrita/alterar_categoria.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_categoria,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                		if(sucess==1){						
                			alert("Categoria Alterada com Sucesso");
                            document.getElementById('frame_alterar_categoria').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_alterar_categoria.reset(); //resetar campos do formulário
                            
                            CategoriasControler.getData(); //atualiza lista de categorias
                            
                		}else if(sucess==3)
                            alert("Você já tem uma categoria cadastrada");
                        else{
                            alert("Falha ao alterar categoria, repita operação!");
                        }
            		}
		});
		
		return false;
	}
    
};