//Retorna alunos aprovados
const alunos = [ // criando objeto dos alunos. 
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Matheus',
		nota: 4,
		turma: '1C',
	},
];

function alunosAprovados(array, media){
    let aprovados = [];

    for(let i = 0; i < array.length; i++) { // indice se inicia em 0, enquanto esse indice for menor do que o "array" ele irá receber +1.

    const {nota,nome} = array[i]; // chamando os indices que queremos utilizar, dentro do array. 

    if(nota >= media ){  // se a nota for maior ou igual a media, vamos então adicionar o nome do aluno

        aprovados.push(nome); // utilizando o metodo "Push" para adicionar os nomes dos alunos aprovados .
    }
    } 
    return aprovados; // mostrara os nomes dos alunos aprovados.
}
console.log(alunosAprovados(alunos, 5)); // chamando o nome dos alunos e escolhendo a media que queremos, para poder visualizar quem foi aprovado.