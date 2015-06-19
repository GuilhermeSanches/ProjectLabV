var COntrollerValidPass = {

validacaoPass: function(form) {
senha1 = form.senha.value;
senha2 = form.senha_rec.value;
    
if (senha1 != senha2) {
return 0;
}
else{
return 1;
}
},
    
validacaoPassUser: function(form) {
senha1 = form.passN.value;
senha2 = form.passN2.value;
    
if (senha1 != senha2) {
return 0;
}
else{
return 1;
}
},  
    
};



