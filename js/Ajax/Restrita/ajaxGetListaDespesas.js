var DespesasControler = {
    inicializar: function () {
                                                    //inicializa o JS	
		DespesasControler.setForm_alterar_despesa();
        ControllerTravel.inicializar();
        Index_get_categorias.inicializar();
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
            cellEditar.innerHTML="<a href='#' onclick=DespesasControler.showDespesa("+Despesas[i].id+")><img src='imagens/edit-icon.png' class='edit-icon'></a>";
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
    
    //Exibe despesa da tabela que será alterada
    showDespesa: function(idDespesa) {
        ControllerTravel.inicializar();
        Index_get_categorias.inicializar();
        $.ajax({			//Função AJAX
            url:"php/Restrita/getDespesaById.php",			//Arquivo php
            type:"POST",				//Método de envio
            data: {id_despesa:idDespesa},	//Dados
            dataType: 'json',
            success: function (despesa){			//Sucesso no AJAX
                
                document.getElementById("alterar_descricao").value = despesa[0].descricao;
                document.getElementById("alterar_valor").value = despesa[0].valor;
                document.getElementById("alterar_data").value = DateFormat.format(despesa[0].data_lancamento);
                $('#alterar_comboCategoria').val(despesa[0].despesa);
                $('#alterar_comboViagem').val(despesa[0].viagem);
                document.getElementById("alterar_id_despesa").value = despesa[0].id;
                document.getElementById("alterar_despesa_id_viagem").value = despesa[0].viagem;
                
                Index_frameAlterarDespesa.abrirFrameAlterarDespesa();
            }
		});
        return false;
    },
    
    //ação do submit do formulário alterar despesa
    setForm_alterar_despesa: function() {
		var form_despesa = document.form_alterar_despesa;		
		form_despesa.onsubmit = function() {
            return DespesasControler.atualizar(this);
		};
	},
	
  
    //atualizar despesa da tabela
    atualizar: function(form_despesa) {
        form_despesa = Form.mergeFormItens(form_despesa);  
        id_viagem = document.getElementById("alterar_despesa_id_viagem").value;
        $.ajax({			//Função AJAX
			url:"php/Restrita/alterar_despesa.php",			//Arquivo php
			type:"POST",				//Método de envio
			data: form_despesa,	//Dados
   			success: function (sucess){			//Sucesso no AJAX
                        if(sucess==1){						
                			alert("Despesa Alterada com Sucesso");
                            document.getElementById('frame_alterar_despesa').style.display='none';
                            document.getElementById('black_overlay').style.display='none';
                            document.form_alterar_despesa.reset(); //resetar campos do formulário
                            DespesasControler.getDespesaByViagem(id_viagem); //atualiza lista de Despesas    
                		}else if(sucess==3)
                            alert("Você já tem uma despesa cadastrada");
                        else{
                            alert("Falha ao alterar despesa, repita operação!");
                        }
                }
		});
        return false;
	}
    
};

//inicializa classe
DespesasControler.inicializar();