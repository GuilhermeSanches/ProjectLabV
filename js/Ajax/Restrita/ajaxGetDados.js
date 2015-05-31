
/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Resume_getDados = {

	inicializar: function(categoria) {
        document.getElementById('conteudo_resumo').style.display='inline-block';
        document.getElementById('container').style.display='inline-block'; //esconde container
        document.getElementById('listaViagens').style.display='none';
                                                   //inicializa o JS	
		Resume_getDados.getData(categoria);        //Setar Formulário
	},
        
		
	getData: function(categoria) {
             
    var result = document.getElementById("container");
    result.innerHTML = '<img src="imagens/progresso.gif"/>';             
	$.post('php/Restrita/getResumo.php', 
           {categoria: categoria},
           Resume_getDados.getDados
            );
				
		return false;
	},
    
    
    getDados: function(dados){   
        var obj = new Array();
         obj = JSON.parse(dados);  
        
        
        
        for(var i=0;i<12;i++){                                     
            
            if(typeof obj[i] == 'undefined')
            {
                   obj[i] = new Array();
                   obj[i].soma = 0; 
                   obj[i].mes = i;    
            }
                                    
                
        }
        var obj2 = new Array();
        
         for(var n =0; n<12; n++){
             obj2[n] = new Array();
             obj2[n].mes = n;
             obj2[n].soma = 0;
             obj2[n].descr = obj[0].descr;
            for(var i=0;i<12;i++){                        
                if(obj[i].mes == n+1){                    
                obj2[n].soma = obj[i].soma;
                obj2[n].mes=n;
                break;}
               }}
        
       
        
        
       Resume_highchart.inicializar(obj2);
        }                 


};
//inicio






