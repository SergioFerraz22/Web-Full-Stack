const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; // criando array


function valoresUnicos(array){ // criando função para receber o array
    const mySet = new Set(array)


    return [...mySet]; // aplicando spread "..." para que os elementos unicos do array sejam exibidos 
}

console.log(valoresUnicos(meuArray));