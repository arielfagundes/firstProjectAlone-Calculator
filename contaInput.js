const contaInput = document.getElementById('contaInput'); 
let contaInputExp = '';



contaInput.addEventListener('keydown', function(event){
    
    if (event.key === 'Enter') {
        contaInputExp = eval(contaInput.value);
        alert(contaInputExp);
    }
});


