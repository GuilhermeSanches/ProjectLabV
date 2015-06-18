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
}
};



