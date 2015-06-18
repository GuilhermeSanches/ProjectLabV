var   getDados = {   
  dados:function(dados2){
  if(!dados2)
  return null;
        var obj = new Array();
         obj = JSON.parse(dados2);  
                        
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
             return obj2[0].descr;
             
  }                 
   };

