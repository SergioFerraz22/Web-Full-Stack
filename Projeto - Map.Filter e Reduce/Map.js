// map sem o metodo "This"
const array = [4,5,6,7,8]; // criando array

console.log(array.map((item) => item *2 )); 
//aplicando metodo "map" para multiplicar os numeros.

console.log(array);
//exibindo numeros antes da multiplicação no array puro.


// Map com "this"

const orange = { // criando objeto 1
	price: 2, // definindo valor
};

const apple = { // criando objeto 2 
	price: 1.5,// definindo valor
};

function mapArray() { // criando função 
	const array = [1, 2, 3, 4, 5]; // criando array

	return array.map(function (item) {
		return item * this.price;
	}, apple); // retornado valor do indice multiplicado pelo array
}

function mapArray2() { // criando função 
	const array = [2, 3, 4, 5, 6]; // criando array

	return array.map(function (item) {
		return item * this.price;
	}, orange); // retornado valor do indice multiplicado pelo array
}

console.log('This -> Laranja', mapArray());
console.log('This -> Maçã', mapArray2());