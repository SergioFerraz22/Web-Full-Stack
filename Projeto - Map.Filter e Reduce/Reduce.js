// somar numeros

/* function somaNumeros(array) { // cria função
    return array.reduce(function(prev,current) { 
        //aplicando função e parametros da função
        console.log({prev}); // exibindo valor de prev
        console.log({current}); //exibindo valor de current
        return prev + current // retornando valor anterior(prev) + valor atual(current)
    }, 0); // aplicando valor inicial no contador.
}

const array = [1,2];

console.log('Prev + Current = ',somaNumeros(array));
 */


// Calcula saldo 

const lista = [ // cria array 
   {
    name:'Frango a passarinho',  // cria objeto 
    preco: 30,
   },
   {
       name: 'Ovos',
       preco: 10,
   },
   {
       name:'Arroz',
       preco: 25,
   },
];

const saldoDisponivel = 100; // valor total para conta

function calculaSaldo(saldoDisponivel, lista) { // criando função com parametros
    return lista.reduce(function(prev,current) { 
        // aplicando reduce para retornar os parametros
        console.log({prev}) // exibir valor inicial e/ou anterior
        console.log({current}) // exibir valor restante e /ou atual
    return prev - current.preco; // calculando inicial - valor do objeto
    }, saldoDisponivel) // indicando valor inicial do acumulador
}

console.log(calculaSaldo(saldoDisponivel,lista)); 
// exibir calculo completo, passando função,variavel e função/objeto