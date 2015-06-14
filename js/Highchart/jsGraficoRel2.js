

var Rel2 = {

inicializar_highchart: function(obj2){
    
            if(obj2!='undefined')
		      Rel2.init(obj2);  
},    
    
    
                                    
    getDadosFinais: function(obj2){
            var dados_finais = new Array;
            for(var i=0;i<6;i++){                            
                dados_finais.push(parseFloat(obj2[i].media));
                
            }
        return dados_finais;
    },
		    
    
    
init: function(obj2){    
    
 
    
    // Set up the chart
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Média de Gastos anuais com Viagens'
        },
        subtitle: {
            text: 'Veja abaixo um resumo dos gastos anuais com viagens'
        },
         xAxis: {
            categories: ['2012', '2013', '2014', '2015', '2016', '2017']
        },
        yAxis: {
            title: {
                text: 'Reais (R$)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: Rel2.getDadosFinais(obj2),
            series: 'viagens'
        }]
    });
 
    
    
 
    },
    
   
    
};




