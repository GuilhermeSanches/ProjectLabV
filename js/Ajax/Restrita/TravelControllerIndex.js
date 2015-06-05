var ControllerTravelIndex = {
        
        GetTravel: function(valueE){               
   
       if(valueE==2){             
        $.post('php/Relatorios/rel_2.php', 
           {relatorio:valueE},
           ControllerTravelIndex.Result
        );
        
				
		return false;
       }
        },

    
        Result: function(travels){
            
                if(travels){
                    var obj = JSON.parse(travels);
                      for(var i=0;i<6;i++){                                     
            
            if(typeof obj[i] == 'undefined')
            {
                   obj[i] = new Array();
                   obj[i].ano = 2012+i; 
                   obj[i].media = 0;
                   obj[i].contador = 0;    
            }
                                    
                
        }
        var obj2 = new Array();
        
         for(var n =0; n<6; n++){
             obj2[n] = new Array();
             obj2[n].ano = n+2012;
             obj2[n].media = 0;
             obj2[n].contador = 0;
            for(var i=0;i<6;i++){                        
                if(obj[i].ano == n+2012){                    
                obj2[n].media = obj[i].media;
                obj2[n].contador=obj[i].contador;
                break;}
               }}
        
                    
                
                    
                    
                    Rel2.inicializar_highchart(obj2);
                }
        
        }

};



//inicializar o js
document.form_relatorios.addEventListener('submit', function(event) {
	ControllerTravelIndex.GetTravel(
        document.form_relatorios.comboRel.options[document.form_relatorios.comboRel.selectedIndex].value);		
			
			//to avoid page refresh/reload
			event.preventDefault();
		}); 

	
        



    
    