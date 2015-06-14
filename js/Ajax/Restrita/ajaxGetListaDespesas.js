var DespesasControler = {
    inicializar: function() {
                                                    //inicializa o JS	
		DespesasControler.setForm_alterar_categoria();
	},
        
	//lista despesa por viagem	
	getDespesaByViagem: function(idViagem) {
             
        $.post('php/Restrita/getDespesasByViagem.php', 
           {id_viagem:idViagem},
           DespesasControler.getDados
        );
				
		return false;
	},
    
    //listar as Despesas na tabela
    getDados: function(dados){   
        var Despesas = new Array();
        Despesas = JSON.parse(dados);        
    
        var corpo = document.getElementById("conteudoTabelaDespesas"); //cria um corpo
        
        corpo.innerHTML="";//limpa tabela
        
        for (var i=0; i<Despesas.length; i++) 
        {
            var row = document.createElement("tr");
                        
            var cellDescricao = document.createElement("td");
            var cellTextDescricao = document.createTextNode(Despesas[i].descricao);
            cellDescricao.appendChild(cellTextDescricao);
            row.appendChild(cellDescricao);
            
            var cellDataLancamento = document.createElement("td");
            var cellTextDataLamento = document.createTextNode(DateFormat.format(Despesas[i].data_lancamento));
            cellDataLancamento.appendChild(cellTextDataLamento);
            row.appendChild(cellDataLancamento);            
            
            var cellValor = document.createElement("td");
            var cellTextValor = document.createTextNode(Despesas[i].valor);
            cellValor.appendChild(cellTextValor);
            row.appendChild(cellValor);
            
            var cellCategoria = document.createElement("td");
            var cellTextCategoria = document.createTextNode(Despesas[i].categoria);
            cellCategoria.appendChild(cellTextCategoria);
            row.appendChild(cellCategoria);
            
            var cellEditar = document.createElement("td");
            cellEditar.innerHTML="<a href='#' onclick=DespesasControler.showCategoria("+Despesas[i].id+")><img src='imagens/edit-icon.png' class='edit-icon'></a>";
            row.appendChild(cellEditar);
        
            var cellExcluir = document.createElement("td");
            cellExcluir.innerHTML="<a href='#' onclick=DespesasControler.remove("+Despesas[i].id+','+Despesas[i].idviagem+")><img src='imagens/remove-icon.png' class='remove-icon'></a>";
            row.appendChild(cellExcluir);            
            
            corpo.appendChild(row);
            
        }
    },
    
    //remover despesa da tabela
    remove: function(idDespesa,idViagem) {
                
        if(confirm("Deseja realmente remover esta despesa?")){
            
            $.post('php/Restrita/remover_despesa.php', 
               {id_despesa:idDespesa},alert("Despesa excluida com sucesso")
            );
            DespesasControler.getDespesaByViagem(idViagem);			
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
            return DespesasControler.atualizar(this);
                    
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
                            
                            DespesasControler.getData(); //atualiza lista de Despesas
                            
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