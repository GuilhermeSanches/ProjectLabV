var Service_html = {
    
        createFields: function(viagens, corpo){
            
       for (var i=0; i<viagens.length; i++) 
        {
            var row = document.createElement("tr");
                        
            var cellLocal = document.createElement("td");
            
            var linkLocal = document.createElement("a");
            linkLocal.setAttribute("href", '#' );
            linkLocal.setAttribute("onclick", 'ServiceTravel.showDetalheViagem('+viagens[i].id_viagem+')' );
            linkLocal.innerHTML = viagens[i].local;
           
            //var cellTextLocal = document.createTextNode(viagens[i].local);
            cellLocal.appendChild(linkLocal);
            row.appendChild(cellLocal);
            
            var cellPartida = document.createElement("td");
            var cellTextPartida = document.createTextNode(DateFormat.format(viagens[i].partida));
            cellPartida.appendChild(cellTextPartida);
            row.appendChild(cellPartida);
            
            var cellRetorno = document.createElement("td");
            var cellTextRetorno = document.createTextNode(DateFormat.format(viagens[i].retorno));
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
            cellEditar.innerHTML="<a href='#' onclick=ServiceTravel.showViagem("+viagens[i].id_viagem+")><img src='imagens/edit-icon.png' class='edit-icon'></a>";
            row.appendChild(cellEditar);
        
            var cellExcluir = document.createElement("td");
            cellExcluir.innerHTML="<a href='#' onclick=ServiceTravel.remove("+viagens[i].id_viagem+")><img src='imagens/remove-icon.png' class='remove-icon'></a>";
            row.appendChild(cellExcluir);            
            corpo.appendChild(row);
            
        }
        
        
        },
        

};