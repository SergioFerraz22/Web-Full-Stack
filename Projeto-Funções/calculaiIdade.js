// calcula idade 

function calculaIdade(anos) { // criando função com parametro 
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade.`;
        // lembrando que usamos o "$" quando vamos chamar uma variavel junto com string.
}
const pessoa1 = { // criando objeto e seus indices.
    nome: "Joao",
    idade: 30
};
const pessoa2 = {
    nome: "Sergio",
    idade: 20
};
const pessoa3 = {
    nome: "Joana",
    idade: 15
};
const pessoa4 = {
    nome: "Jose",
    idade: 27
};
const pessoa5 = {
    nome: "Maria",
    idade: 21
};
console.log(calculaIdade.call(pessoa2,30)); // chamando o indice que queremos e os anos a serem acrescentados, usando o metodo call



/* outro metodo de usar o console.log

"console.log(calculaIdade.apply(pessoa2,[30]));"

a diferença do "apply" para o "this" é que precisamos inserir o complemento para calculo entre  "[]" */