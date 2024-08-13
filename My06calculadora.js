//Buscando as Div's pelo Id:
var conta = document.getElementById('conta');

// Adiciona números e operadores chamando a function e dando valores aos parâmetros.
function number0(){
    addNumber('0');
}
function number1(){
    addNumber('1');
}
function number2(){
    addNumber('2');
}
function number3(){
    addNumber('3');
}
function number4(){
    addNumber('4');
}
function number5(){
    addNumber('5');
}
function number6(){
    addNumber('6'); 
}
function number7(){
    addNumber('7');
}
function number8(){
    addNumber('8'); 
}
function number9(){ 
    addNumber('9');
}
function virgula(){
    addNumber('.')
}
// Operadores
function divisao(){
    addNumber('/')
}
function multiplicacao(){
    addNumber('*')
}
function adicao(){
    addNumber('+')
}
function subtracao(){
    addNumber('-')
}

let list = []; // Criando uma array vazia pra depois iterar e achar o operador.
let exp = ''; // Criando variável para adicionar uma expressão em string com os mesmo valores da array. 

function addNumber(valor){
    conta.innerHTML += valor; // Insere o valor digitado na div
    exp += valor; // Insere o valor na variável expressão
    list.push(valor) // Insere valores na lista 
    
} 

function envioConta(){
    for (let i = 0; i < list.length; i++){ // Itera sobre a array para encontrar o operador digitado.        
        switch (list[i]) {
            case '/':
                exp = eval(exp); // Deixa de ser string com eval()
                break;
            case '*':
                exp = eval(exp);
                break;
            case '+':
                exp = eval(exp);
                break;
            case '-':
                exp = eval(exp);
                break;
            default:
                break;
        }
    }
    conta.innerHTML = exp; // Insere novo valor da expressão já realizada.
}

const restart = () => { // Chama a função onclick onde atualiza a página
    location.reload();
}

const zeraConta = () => {
    location.reload();
}

const porcentagem = () => {
    exp = exp / 100;
    conta.innerHTML = exp;
}

const del = () => {
    exp = exp.slice(0, -1);
    conta.innerHTML = exp;
}
