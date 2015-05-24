/**
 *
 *
 * @author:Guilherme Sanches 
 *
 */

var Form = {
					
	mergeFormItens: function(form) {
		var sParams = new String;
		var aParams = new Array;
		
		form = (typeof form == "string") ? $(form) : form;
		
		for(var i=0; i<form.elements.length; i++) {
			var element = form.elements[i];																
					sParams = element.name + "=" + element.value;
					if(sParams) aParams.push(sParams);																					
		}//fim do for

		return aParams.join("&");
	}//fim getValues
	
	

	
};