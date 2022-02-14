// filtra numeros pares 

function filtraPares(array){ // cria função
    return array.filter(callback); // retorna função com callback
}

function callback(item){ // cria função 
    return item % 2 === 0; // caso o resto da divisão seja igual a 0, então retornara numero par.
}
/* function callback(item){ // cria função 
    return item % 2 !== 0 // caso resto da divisão não seja igual a 0 então retornara numero impar.
} */
const Nums = [1,33,56,67,30,2,4]; // cria array

console.log(filtraPares(Nums));
