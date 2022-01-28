//Funções aritmeticas 
//Criando calculadora 
function calculadora(){ // criando a funcao calculadora com o "prompt" que é uma caixa para o usuario interagir.
    const operacao = Number (prompt('Escolha uma operação:\n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)')); //  "\n" serve para quebrar a linha do codigo . 
    console.log(operacao) // exibir a função operacao em tela

    //  Verificação caso o usuario digite uma opção invalida ou seja (n.7 ou maior)
    if(!operacao || operacao >= 7 ){ // se operação não for igual a um numero ou se operação for maior ou igual a 7.
        alert("Operação Invalida !"); // exibindo mensagem de erro.
        calculadora();
    }else { // caso ele digite uma opção valida será executada toda operação normalmente.

        // Definindo as variaveis para o usuario inserir os valores e depois ver o resultado.
        let n1 = Number(prompt('insira o primeiro valor:')) // number.prompt (para transformar a string em numero) aplicado para o usuario inserir o 1 valor
        let n2 = Number(prompt('Insira o segundo valor:')) // number.prompt aplicado para o usuario inserir o 2 valor
        let resultado; // exibir o resultado 

        // criando verificação para as variaveis "let"
        if(!n1 || !n2){ // caso o usuario não digite n1 ou n2 
            alert("Erro - informações inválidas !") // ira exibir uma mensagem
            calculadora(); // e retorna para a calculadora
        } else{ // se não, será executado todas as funções normalmente.
            
            // declarando as funções
            function soma(){
            resultado = n1 + n2
            alert(`${n1} + ${n2} = ${resultado}`) // Chamando "alert" para exibir mensagem ao usuario, e crase para podermos usar strings com expressões e variaveis 
                novaOperacao(); // ao final de qualquer operação ira perguntar ao usuario se ele deseja realizar uma nova operação.
            }
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao(); 
            }
            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2 
                alert(`${n1} / ${n2} = ${resultado} `)
                novaOperacao();
            }
            function divisaoInteira(){ 
                resultado = n1 % n2
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a = ${resultado}`) // alteração feita para mostrar o resto da divisão mais explicativo para o usuario. 
                novaOperacao();
            }
            
            function potenciacao(){
                resultado = n1 ** n2 
                alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
                novaOperacao();
            }
            
            // Criando opção após o usuario terminar uma operação
            function novaOperacao(){
                let opcao = prompt ("Deseja realizar uma nova operação ?\n1 - Sim\n2 - Não");
            
                if (opcao == 1){ // caso o usuario digite 1 ire retornar a calculadora para realizar uma nova operação
                calculadora();
                 } else id (opcao == 2);{ // caso ele digite 2 irá exibir uma mensagem
                alert("Até mais !") 
                 }
               }
             }
        
        
        // criando verificação para as operações com o metodo IF e Else if. 
        /* if (operacao == 1){
            soma();
        }else if (operacao == 2){
            subtracao();
        }else if (operacao == 3){
            multiplicacao();
        }else if (operacao == 4){
            divisaoReal();
        }else if (operacao == 5){
            divisaoInteira();
        }else if (operacao == 6){
            potenciacao();
        } */
        
        switch(operacao){ // criando laço de switch case para realizar a operação
        case 1: // criando 1 caso
         soma(); // chamando a função desejada
         break; // aplicando "break" para não entrar em loop infinito
        case 2:
         subtracao();
         break;
        case 3:
         multiplicacao();
         break;
        case 4:
         divisaoReal();
         break;
        case 5:
         divisaoInteira();
         break;
        case 6:
         potenciacao();
         break;
             
    }          
  }
}
calculadora();
