/**
 *
 * @author:Guilherme Sacnhes 
 *
 */

var Resume_highchart = {

	inicializar: function(obj2) {	                   //inicializa o JS	
		Resume_highchart.criarHighchart(obj2);        //Setar Formulário
	},
                                      
    getDadosFinais: function(obj2){
            var dados_finais = new Array;
            for(var i=0;i<12;i++){                
                dados_finais.push(parseInt(obj2[i].soma));
                
            }
        return dados_finais;
    },
		
	criarHighchart: function(obj2) {           
     $('#container').highcharts({
        title: {
            text: 'Resumo Anual da Situação Financeira',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: guisanches.com.br',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
        tooltip: {
            valueSuffix: 'R$'
            
        
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },                      
        
        series: [{
            name: obj2[0].descr,
            data: Resume_highchart.getDadosFinais(obj2)
        },
                ]
    });
        
    }
                 
};
//inicio
window.onload = Resume_highchart.inicializar;





