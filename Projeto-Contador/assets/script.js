var currentNumberWrapper = document.getElementById('currentNumber') //Criando Variavel para buscar o elemento do contador pela ID do mesmo
var currentNumber = 0; // aqui indicamos o numero inicial do contador

function increment() { /* chamando função increment, para aumentar o valor do contador no caso 
    sempre somando mais 1 */
 currentNumber = currentNumber +1;
 currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() { // realizando a mesma operação ao inverso
currentNumber = currentNumber -1;
currentNumberWrapper.innerHTML = currentNumber;
}
