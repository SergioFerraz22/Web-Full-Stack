 function comparaNumeros(num1,num2){ // criando função para receber 2 parametros 

    if(!num1 || num2) return 'Defina dois números !' // Aplicando condição caso o usuario não digite 2 numeros.

    const primeiraFrase = criaPrimeiraFrase(num1 , num2); // criando função auxiliar para nossa primeira frase.
    const segundaFrase = criaSegundaFrase(num1, num2); // função auxilar para segunda frase
 
    return `${primeiraFrase} ${segundaFrase}`; // rodando as 2 funções
 }
 
 
 function criaPrimeiraFrase(num1, num2){
     let saoIguais=''; // criando string auxilar caso o n1 e n2 sejam iguais.
 
     if(num1 !== num2) { // criando condiçao comparando se n1 e n2 não são iguais.

         saoIguais = 'não'; // caso os numeros não sejam iguais, irá retornar o "não". complementando a frase
 
     }
     return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`; 
 }
 
 function criaSegundaFrase(num1,num2){
     const soma = num1 + num2; // somando os valores
 
     let resultado15='menor'; // caso a soma não seja maior do que 10, será exibido "menor"
     let resultado30='menor';
 
     const compara15 = soma > 15; // const para comparar se a soma de n1 e n2 é maior que 10
     const compara30 = soma > 30; 
 
     if(compara10) { // criando condição caso a soma seja maior doq 10
         resultado15= 'maior';
     }
     if(compara20){ 
         resultado30= 'maior';
     }
 
     return `Sua soma é ${soma}, que é ${resultado10} que 15 e ${resultado20} que 30.`;
 }
     
 console.log(comparaNumeros(0,0)); // inserindo o valor para rodar o codigo.   


 